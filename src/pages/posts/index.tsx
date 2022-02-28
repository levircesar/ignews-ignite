import Head from "next/head";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client"
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>
              Obter uma oportunidade no exterior é um objetivo e um sonho para
              muitos devs que procuram expandir o conhecimento através de
              experiências multiculturais. Apesar de haver uma série de desafios
              — que vão desde a qualificação profissional até a bagagem de
              conhecimento exigida lá fora — muitas pessoas desenvolvedoras
              conseguem abrir as fronteiras em seus currículos.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>
              Obter uma oportunidade no exterior é um objetivo e um sonho para
              muitos devs que procuram expandir o conhecimento através de
              experiências multiculturais. Apesar de haver uma série de desafios
              — que vão desde a qualificação profissional até a bagagem de
              conhecimento exigida lá fora — muitas pessoas desenvolvedoras
              conseguem abrir as fronteiras em seus currículos.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Oportunidades internacionais em programação</strong>
            <p>
              Obter uma oportunidade no exterior é um objetivo e um sonho para
              muitos devs que procuram expandir o conhecimento através de
              experiências multiculturais. Apesar de haver uma série de desafios
              — que vão desde a qualificação profissional até a bagagem de
              conhecimento exigida lá fora — muitas pessoas desenvolvedoras
              conseguem abrir as fronteiras em seus currículos.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type','post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  }
  )
  console.log(response)
  // console.log(JSON.stringify(response, null , 2))
  return {
    props:{}
  }
}