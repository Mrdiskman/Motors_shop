import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { BackGroundStyle } from "@/components/GeneralComponents/Background/styled";
import AnnounceDescription from "@/components/AnnounceDashboardComponents/DetailUserComponents";
import BackGround from "@/components/GeneralComponents/Background";
import { useContext, useEffect, useState } from "react";
import { user } from "../announcer/[id]";
import { api } from "@/services/api";
import { TitleHome } from "../announcer/styles";
import { ModalContext } from "@/contexts/Modal/ModalContext";
import Modal from "@/components/GeneralComponents/Modal";
import { IProps } from "@/components/GeneralComponents/Modal/modalRequest";

function AnnouncerDashboard() {
  const { modal, setModal, setAnnounceId } = useContext(ModalContext);
  const [isModal, setIsModal] = useState<IProps>({ title: "Sucesso!" });

  const [isAnnouncer, setIsAnnouncer] = useState<null | user>(null);
  async function announcerData(token: string) {
    const result = await api
      .get(`/user`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res: any) => {
        setIsAnnouncer(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      announcerData(token);
    }
  }, []);

  return (
    <>
      <Modal title={isModal.title} />
      <Header />
      <BackGround>
        <AnnounceDescription
          name={isAnnouncer?.name}
          abbreviation={isAnnouncer?.abbreviation}
          descripition={isAnnouncer?.descripition}
          owner={isAnnouncer?.name}
          setIsModal={setIsModal}
        ></AnnounceDescription>
        <TitleHome>Carros</TitleHome>
        <CarouselComponent>
          {isAnnouncer?.announcements.find((elem) => elem.type == "carro") ? (
            isAnnouncer?.announcements.map((announcer, index) => {
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
                    setIsModal={setIsModal}
                    id={announcer.id}
                    edit={true}
                  />
                );
              }
            })
          ) : (
            <h1>Nao ha anuncios de carros</h1>
          )}
        </CarouselComponent>

        <TitleHome>Motos</TitleHome>
        <CarouselComponent>
        {isAnnouncer?.announcements.find((elem) => elem.type == "moto") ?(
            isAnnouncer?.announcements.map((announcer, index) => {
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
                    setIsModal={setIsModal}
                    id={announcer.id}
                    active={announcer.isActive}
                    edit={true}
                  />
                );
              }
            })
          ) : (
            <h1>Não ha anuncios de motos</h1>
          )}
        </CarouselComponent>
      </BackGround>

      <Footer />
    </>
  );
}
export default AnnouncerDashboard;
