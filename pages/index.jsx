import {useState} from 'react'

import Head from 'next/head'

import Title from "../src/components/title/Title";
import Subtitle from "../src/components/subtitle/Subtitle";
import Button from '../src/components/button/Button'

function HomePage() {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log("HANDLE CLICK")
    setClick(click + 1)
  }

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
      <Button onClick={handleClick}
      >Botão teste</Button>
      <p>Cliques: {click}</p>
    </div>
    </>
  );
}

export default HomePage;
