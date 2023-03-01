import Head from "next/head";
import mockImage from "../../public/car_page_mock.jpg";
import { Container, ImageFit } from "@/components/GeneralComponents";
import { Layout } from "@/components/Layout";
import HeaderContextProvider from "@/contexts/header/HeaderContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Motor Shop App</title>
        <meta
          name="description"
          content="Motor Shop App by Kenzie Academy students"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContextProvider>
        <Layout>
          <Container>
            <ImageFit
              src={mockImage}
              objectFit={"contain"}
              layout="responsive"
              alt="car_shop_mock"
            />
          </Container>
        </Layout>
      </HeaderContextProvider>
      <main></main>
    </>
  );
}
