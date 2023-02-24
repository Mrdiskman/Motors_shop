import BuildAnnouncerCard from "../../components/announcerComponent/announcerCard";
import { BackGroundStyle } from "../../components/backgroundComponent/backgroundStyled";
import CarouselComponent from "../../components/carouselComponent";
import Footer from "../../components/footerComponent/footer";
import Header from "../../components/headerComponent/header";
import { carsData } from "../../components/vehicleCardComponent/carsDatabase";
import { motorcyclesData } from "../../components/vehicleCardComponent/motorcyclesDatabase";
import BuildVehicleCard from "../../components/vehicleCardComponent/vehicleCard";
import { database } from "../../database";
import { DivStylesAnnounce } from "./userDashBoardStyle";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <BackGroundStyle>
        <DivStylesAnnounce>
          <BuildAnnouncerCard
            name={database.user.name}
            seller={database.user.seller}
            descripition={database.user.descripition}
          />
        </DivStylesAnnounce>
        <p className="titleHome" id="cars">
            Carros
          </p>
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

        <p className="titleHome" id="motos">
          Motos
        </p>
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
      </BackGroundStyle>

      <Footer />
    </>
  );
};

export default UserDashboard;
