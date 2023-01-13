import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import Nosotros from '../components/cards/Nosotros'


export default function Home() {
  return (
    <>
      <Head>
        <title>Teo-Coop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nosotros/>
    </>
  )
}
