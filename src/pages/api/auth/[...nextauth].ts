import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { fauna } from '../../../services/fauna'
import { query as q } from 'faunadb'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    })
  ],

  secret: process.env.SIGNIN_KEY,

  pages: {
    signIn: process.env.NEXTAUTH_URL + '/',
    signOut: process.env.NEXTAUTH_URL + '/',
    error: process.env.NEXTAUTH_URL + '/' // Error code passed in query string as ?error=
  },
  callbacks: {
    async session({ session }) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active')
            ])
          )
        )
        return {
          ...session,
          activeSubscription: userActiveSubscription
        }
      } catch (error) {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn(data) {
      const { email } = data.user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(data.user.email))
              )
            ),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(
              q.Match(q.Index('user_by_email'), q.Casefold(data.user.email))
            )
          )
        )
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})
