import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import { HomeStyles } from "../home/styled";
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
        <AnnounceDescription />
        <h2 className="TitleHome auctions">Leilão</h2>
      </BackGround>
      <CarouselComponent>
        <CardAuction />
        <CardAuction />
        <CardAuction />
        <CardAuction />
      </CarouselComponent>

      <Footer />
    </>
  );
}
export default AnnouncerDashboard;
