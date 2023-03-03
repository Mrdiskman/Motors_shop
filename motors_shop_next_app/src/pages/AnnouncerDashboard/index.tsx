import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { BackGroundStyle } from "@/components/GeneralComponents/Background/styled";
import AnnounceDescription from "@/components/AnnounceDashboardComponents/DetailUserComponents";
import BackGround from "@/components/GeneralComponents/Background";

function AnnouncerDashboard() {
  return (
    <>
      <Header />
      <BackGround>
        <AnnounceDescription owner={"Kalebe"}></AnnounceDescription>
        <h2 className="TitleHome auctions">Leilão</h2>
        <CarouselComponent>
          <CardAuction owner={"Kalebe"} />
          <CardAuction owner={"Kalebe"} />
          <CardAuction owner={"Kalebe"} />
          <CardAuction owner={"Kalebe"} />
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
            edit={true}
          />
          {/* ))} */}
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
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
            edit={true}
          />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          <CardVehicle edit={true} />
          {/* ))} */}
        </CarouselComponent>
      </BackGround>

      <Footer />
    </>
  );
}
export default AnnouncerDashboard;