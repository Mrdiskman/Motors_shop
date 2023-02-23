import CardAuction from "../../components/cardAuctionComponent";
import CarouselComponent from "../../components/carouselComponent";
import Header from "../../components/headerComponent/header";
import HomeNav from "../../components/homeNav";
import BuildVehicleCard from "../../components/vehicleCardComponent/vehicleCard";
import { HomeStyles } from "./style";
import { carsData } from "../../components/vehicleCardComponent/carsDatabase";
import { motorcyclesData } from "../../components/vehicleCardComponent/motorcyclesDatabase";

const Home = () => (
  <HomeStyles>
    <Header />
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
    </div>
  </HomeStyles>
);
export default Home;
