import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import { HomeStyles } from "./styled";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";

function Home() {
  return (
    <>
      <Header />
      <HomeStyles>
        <HomeNav cars={"cars"} motos={"motos"} />
        <div className="container">
          <h2 className="TitleHome auctions">Leilão</h2>
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
          </CarouselComponent>

          <h2 className="TitleHome" id="motos">
            Motos
          </h2>
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
      <Footer />
    </>
  );
}
export default Home;
