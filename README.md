# Projeto IgNews - Ignite Rocketseat

Criado com Next

```
yarn create next-app ignews
```

O projeto usa
  1) Next Js
  2) FaunaDB
  3) Stripe
  4) Autenticacao com nextAuth e github

dica stripe, para exibir dados do produto apartir do price, use:
```
const price  = await stripe.prices.retrieve(priceId , {
    expand: ['product']
  })
```