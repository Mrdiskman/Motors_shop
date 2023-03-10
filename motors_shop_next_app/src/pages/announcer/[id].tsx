import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { BackGroundStyle } from "@/components/GeneralComponents/Background/styled";
import AnnounceDescription from "@/components/AnnounceDashboardComponents/DetailUserComponents";
import BackGround from "@/components/GeneralComponents/Background";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { announcement } from "../announceDetail/[id]";
import { TitleHome } from "./styles";
import { useRouter } from "next/router";
export type user = {
  name: string;
  abbreviation: string;
  descripition: string;
  announcements: announcement[];
};

function Announcer() {
  const { query } = useRouter();
  const [isAnnouncer, setIsAnnouncer] = useState<null | user>(null);
  async function announcerData() {
    const result = await api
      .get(`/user/${query.id}`)
      .then((res: any) => {
        setIsAnnouncer(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    if (query.id) {
      announcerData();
    }
  }, [query]);
  return (
    <>
      <Header />
      <BackGround>
        <AnnounceDescription
          name={isAnnouncer?.name}
          abbreviation={isAnnouncer?.abbreviation}
          descripition={isAnnouncer?.descripition}
        ></AnnounceDescription>
        <TitleHome>Carros</TitleHome>
        <CarouselComponent>
          {isAnnouncer ? (
            isAnnouncer.announcements.map((announcer, index) => {
              if (announcer.type == "carro") {
                return (
                  <CardVehicle
                    key={index}
                    img={announcer.default_img}
                    title={announcer.model}
                    descryption={announcer.description}
                    announcer={announcer.user?.name}
                    abbreviation={announcer.user?.abbreviation}
                    km={announcer.km}
                    year={announcer.year}
                    price={announcer.price}
                    active={announcer.isActive}
                    owner={isAnnouncer.name}
                  />
                );
              }
            })
          ) : (
            <></>
          )}
        </CarouselComponent>

        <TitleHome>Motos</TitleHome>
        <CarouselComponent>
          {isAnnouncer ? (
            isAnnouncer.announcements.map((announcer, index) => {
              if (announcer.type == "moto") {
                return (
                  <CardVehicle
                    key={index}
                    img={announcer.default_img}
                    title={announcer.model}
                    descryption={announcer.description}
                    announcer={announcer.user?.name}
                    abbreviation={announcer.user?.abbreviation}
                    km={announcer.km}
                    year={announcer.year}
                    price={announcer.price}
                    active={announcer.isActive}
                    owner={isAnnouncer.name}
                  />
                );
              }
            })
          ) : (
            <></>
          )}
        </CarouselComponent>
      </BackGround>

      <Footer />
    </>
  );
}
export default Announcer;
