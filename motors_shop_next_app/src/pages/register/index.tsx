import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FooterComponent } from '@/components/Footer/styles'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Motor Shop App</title>
        <meta name="description" content="Motor Shop App by Kenzie Academy students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header/>
            <h1>
                PAGINA DE CADASTRO
            </h1>
        <Footer/>
       
      </main>
    </>
  )
}
