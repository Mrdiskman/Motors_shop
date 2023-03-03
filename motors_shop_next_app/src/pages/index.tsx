import Head from "next/head";
import { Layout } from "@/components/Layout";
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { HomeStyles } from "./announcer/styles";
import { api } from "@/services/api";
import ListCards from "@/components/GeneralComponents/ListCards";

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
          <HomeStyles>
            <HomeNav cars={"cars"} motos={"motos"} />
            <div className="container">
              <h2 className="TitleHome">Leilão</h2>
              <CarouselComponent>
                <CardAuction />
                <CardAuction />
                <CardAuction />
                <CardAuction />
              </CarouselComponent>

              <h2 className="TitleHome" id="cars">
                Carros
              </h2>
              <ListCards tipo={"carro"} />
              <h2 className="TitleHome" id="motos">
                Motos
              </h2>
              <ListCards tipo={"moto"} />
            </div>
          </HomeStyles>
        </Layout>
      </HeaderContextProvider>
    </>
  );
}
