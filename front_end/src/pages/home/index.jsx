import BackGround from "../../components/backgroundComponent/background";
import CardAuction from "../../components/cardAuctionComponent";
import CarouselComponent from "../../components/carouselComponent";
import Header from "../../components/headerComponent/header";
import HomeNav from "../../components/homeNav";
import { HomeStyles } from "./style";

const Home = () => (
  <HomeStyles>
    <Header />
    <HomeNav />
    <h2 className="TitleHome">Leilão</h2>
    <CarouselComponent>
      <CardAuction />
      <CardAuction />
      <CardAuction />
      <CardAuction />
    </CarouselComponent>
  </HomeStyles>
);
export default Home;
