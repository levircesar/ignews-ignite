import Head from "next/head";
import styles from "./styles.module.scss";

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
