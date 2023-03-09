import Head from "next/head";
import { Layout } from "@/components/Layout";
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import ListCards from "@/components/GeneralComponents/ListCards";
import { HomeStyles } from "./AnnouncerDashboard/styled";
import AnnounceContextProvider from "@/contexts/announce/announceContext";

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
        <AnnounceContextProvider>
          <Layout>
            <HomeStyles>
              <HomeNav cars={"cars"} motos={"bikes"} />
              <div className="container">
                <h2 className="TitleHome" id="auctions">Leilão</h2>
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
                <h2 className="TitleHome" id="bikes">
                  Motos
                </h2>
                <ListCards tipo={"moto"} />
              </div>
            </HomeStyles>
          </Layout>
        </AnnounceContextProvider>
      </HeaderContextProvider>
    </>
  );
}
