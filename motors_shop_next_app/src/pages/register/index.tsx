import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FooterComponent } from '@/components/Footer/styles'
import { Container, Form, Input, Label, Title } from '@/components/GeneralComponents'

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
            <Container
                width='411px'
                height='1630px'
                justifyContent='start'
                padding='44px 48px'
            >
                <Title
                    marginBottom='32px'    
                >
                    Cadastro
                </Title>
                <Label>
                    Informacoes Pessoais
                </Label>
                <Form>
                    <Label>
                        Nome
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="123-45-678"
                        >
                    </Input>
                </Form>
            </Container>
        <Footer/>
       
      </main>
    </>
  )
}
