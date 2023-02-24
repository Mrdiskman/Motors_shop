import BuildAnnouncerCard from "../../components/announcerComponent/announcerCard";
import { BackGroundStyle } from "../../components/backgroundComponent/backgroundStyled";
import CardAuction from "../../components/cardAuctionComponent";
import CarouselComponent from "../../components/carouselComponent";
import Footer from "../../components/footerComponent/footer";
import Header from "../../components/headerComponent/header";
import { carsData } from "../../components/vehicleCardComponent/carsDatabase";
import { motorcyclesData } from "../../components/vehicleCardComponent/motorcyclesDatabase";
import BuildVehicleCard from "../../components/vehicleCardComponent/vehicleCard";
import { database } from "../../database";

const AnnouncerDashboard = () => {

  return (
    <>
      <Header />
      <BackGroundStyle>
        <BuildAnnouncerCard
          name={database.user.name}
          seller={database.user.seller}
          descripition={database.user.descripition}
        />
      </BackGroundStyle>
      <CarouselComponent>
        <CardAuction />
        <CardAuction />
        <CardAuction />
        <CardAuction />
      </CarouselComponent>

      <h2 className="TitleHome" id="cars">
        Carros
      </h2>
      <CarouselComponent>
        {carsData.map((car, index) => (
          <BuildVehicleCard
            key={index}
            img={car.img}
            title={car.title}
            descryption={car.descryption}
            announcer={car.announcer}
            km={car.km}
            year={car.year}
            price={car.price}
          />
        ))}
      </CarouselComponent>
      <h2 className="TitleHome" id="motos">
        Motos
      </h2>
      <CarouselComponent>
        {motorcyclesData.map((moto, index) => (
          <BuildVehicleCard
            key={index}
            img={moto.img}
            title={moto.title}
            descryption={moto.descryption}
            announcer={moto.announcer}
            km={moto.km}
            year={moto.year}
            price={moto.price}
          />
        ))}
      </CarouselComponent>
      <Footer />
    </>
  );
};

export default AnnouncerDashboard;
