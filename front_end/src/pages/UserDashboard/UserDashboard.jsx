import BuildAnnouncerCard from "../../components/announcerComponent/announcerCard";
import { BackGroundStyle } from "../../components/backgroundComponent/backgroundStyled";
import CarouselComponent from "../../components/carouselComponent";
import Footer from "../../components/footerComponent/footer";
import Header from "../../components/headerComponent/header";
import BuildUserVehicleCard from "../../components/userDashComponent/vehicleUserCard";
import { carsData } from "../../components/vehicleCardComponent/carsDatabase";
import { motorcyclesData } from "../../components/vehicleCardComponent/motorcyclesDatabase";
import { database } from "../../database";
 userDashboard
import { Div_block, UserDashStyles } from "./userDashBoard.style";


const UserDashboard = () => {
  return (
    <>
      <Header />
      <BackGroundStyle>
userDashboard
        <UserDashStyles>

          <BuildAnnouncerCard
            name={database.user.name}
            seller={database.user.seller}
            descripition={database.user.descripition}
          />

          <Div_block></Div_block>
          <h2 className="TitleHome" id="cars">
            Carros
          </h2>
          <CarouselComponent>
            {carsData.map((car, index) => (
              <BuildUserVehicleCard
                key={index}
                img={car.img}
                is_active={car.is_active}
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
              <BuildUserVehicleCard
                key={index}
                img={moto.img}
                is_active={moto.is_active}
                title={moto.title}
                descryption={moto.descryption}
                announcer={moto.announcer}
                km={moto.km}
                year={moto.year}
                price={moto.price}
              />
            ))}
          </CarouselComponent>
        </UserDashStyles>

      </BackGroundStyle>

      <Footer />
    </>
  );
};

export default UserDashboard;
