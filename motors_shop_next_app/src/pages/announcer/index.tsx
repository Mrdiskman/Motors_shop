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
import { announcement } from "../announceDetail";
import { TitleHome } from "./styles";
type user = {
  name: string;
  abbreviation: string;
  descripition: string;
  announcements: announcement[];
};

function Announcer() {
  const [isAnnouncer, setIsAnnouncer] = useState<null | user>(null);
  async function announcerData() {
    const result = await api
      .get("/user/121292e2-749b-4ce2-8a98-ee687f6e78f0")
      .then((res: any) => {
        setIsAnnouncer(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    announcerData();
  }, []);
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
          <CardVehicle active={false} owner={"Kalebe"} />
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

          <CardVehicle active={false} owner={"Kalebe"} />
        </CarouselComponent>
      </BackGround>

      <Footer />
    </>
  );
}
export default Announcer;
