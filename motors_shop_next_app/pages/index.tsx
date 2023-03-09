import Head from "next/head";

import Footer from "@/components/GeneralComponents/Footer";

import { useContext } from "react";

import Modal from "@/components/GeneralComponents/Modal";
import Landing from "@/components/HomeComponents/Landing";
import Navbar from "@/components/GeneralComponents/Navbar";
import { ModalContext } from "@/contexts/Modal/ModalContext";
import ListCards from "@/components/GeneralComponents/ListCards";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CarouselComponent from "@/components/GeneralComponents/Carousel";

export default function Home() {
  const { type } = useContext(ModalContext);
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
      <Modal title={type} />
      <Navbar />
      <main>
        <Landing id="landing_section" />
        <CarouselComponent>
          <CardAuction />
        </CarouselComponent>
        <ListCards type={"carro"} />
        <ListCards type={"moto"} />
        <Footer />
      </main>
    </>
  );
}
