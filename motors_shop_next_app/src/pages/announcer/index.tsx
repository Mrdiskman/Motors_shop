import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import HomeNav from "@/components/HomeComponents/HomeNav";
import CarouselComponent from "@/components/GeneralComponents/Carousel";
import CardAuction from "@/components/GeneralComponents/CardAuction";
import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { BackGroundStyle } from "@/components/GeneralComponents/Background/styled";
import AnnounceDescription from "@/components/AnnounceDashboardComponents/DetailUserComponents";
import BackGround from "@/components/GeneralComponents/Background";

function Announcer() {
  return (
    <>
      <Header />
      <BackGround>
        <AnnounceDescription></AnnounceDescription>
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
            active={true}
            owner={"Kalebe"}
          />
          {/* ))} */}
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
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
            active={true}
            owner={"Kalebe"}
          />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          <CardVehicle active={true} owner={"Kalebe"} />
          <CardVehicle active={false} owner={"Kalebe"} />
          {/* ))} */}
        </CarouselComponent>
      </BackGround>

      <Footer />
    </>
  );
}
export default Announcer;
