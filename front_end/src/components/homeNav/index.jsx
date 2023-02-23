import ButtonHome from "../buttonHome";
import { HomeNavStyle } from "./styles";

const HomeNav = ({ cars, motos }) => {
  return (
    <HomeNavStyle>
      <div className="containerNav">
        <h1 className="titleHome">
          Velocidade e experiência em um lugar feito para você
        </h1>
        <p className="descriptionHome">
          Um ambiente feito para você explorar o seu melhor
        </p>
        <nav className="navHome">
          <ButtonHome link={cars}>Carros</ButtonHome>
          <ButtonHome link={motos}>Motos</ButtonHome>
        </nav>
      </div>
    </HomeNavStyle>
  );
};
export default HomeNav;
