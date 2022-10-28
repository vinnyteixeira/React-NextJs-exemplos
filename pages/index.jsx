import Head from 'next/head'

import Title from "../src/components/title/Title";
import Subtitle from "../src/components/subtitle/Subtitle";

function HomePage() {
  return (
    <>
    <Head>
      <title>Titulo diferente</title>
    </Head>
    <div>
      <Title>Um titulo</Title>
      <Subtitle text="Um subtitulo"/>

      <Title>Outro titulo</Title>
      <Subtitle  text="Outro subtitulo"/>
    </div>
    </>
  );
}

export default HomePage;
