import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FooterComponent } from '@/components/Footer/styles'

import mockImage from "../../public/car_page_mock.jpg"
import { Container, ImageFit } from '@/components/GeneralComponents'
import { Layout } from '@/components/Layout'
//static import - automaticamente dimensiona a imagem
//https://nextjs.org/docs/basic-features/image-optimization#local-images

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

      <Layout>

        <Container>
            <ImageFit
                src={mockImage}
            
                objectFit={"contain"} //https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                //src="/car_page_mock.jpg"
                layout="responsive" //fixed, intrinsic, responsive, fill 
                //fill={true}
                //width="800" 
                //height="300" 

                alt="car_shop_mock" 
            />
        </Container>
      </Layout>
      <main >

      
       
      </main>
    </>
  )
}
