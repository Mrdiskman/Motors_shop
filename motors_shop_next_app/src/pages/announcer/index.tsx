import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import { DivStylesAnnounce, HomeStyles, TitleHome } from "./styles";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { Layout } from "@/components/Layout";
import { Container } from "@/components/GeneralComponents";
import BuildAnnouncerCard from "@/components/AnnouncerComponents/BuildAnnouncerCard";
import { database } from "@/database";
import BackGround from "@/components/GeneralComponents/Background";

function Announcer() {
  return (
    
    <Layout>
      <HomeStyles>
        <BackGround>
          <DivStylesAnnounce>
            <BuildAnnouncerCard
              name={database.user.name}
              seller={database.user.seller}
              descripition={database.user.descripition}
            />
          </DivStylesAnnounce>
        </BackGround>
        <div className="container">
      
          <TitleHome>Leilão</TitleHome>
          <CarouselComponent>
            <CardAuction />
            <CardAuction />
            <CardAuction />
            <CardAuction />
          </CarouselComponent>

          <TitleHome id="cars">
            Carros
          </TitleHome>
          <CarouselComponent>
            {/* {carsData.map((car, index) => ( */}
            <CardVehicle
            // key={index}
            // img={car.img}
            // title={car.title}
            // descryption={car.descryption}
            // announcer={car.announcer}
            // km={car.km}
            // year={car.year}
            // price={car.price}
            />
            {/* ))} */}
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
          </CarouselComponent>

          <TitleHome id="motos">
            Motos
          </TitleHome>
          <CarouselComponent>
            {/* {motorcyclesData.map((moto, index) => ( */}
            <CardVehicle
            // key={index}
            // img={moto.img}
            // title={moto.title}
            // descryption={moto.descryption}
            // announcer={moto.announcer}
            // km={moto.km}
            // year={moto.year}
            // price={moto.price}
            />
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            <CardVehicle/>
            {/* ))} */}
          </CarouselComponent>
        </div>
      </HomeStyles>
    </Layout>

  );
}
export default Announcer;
