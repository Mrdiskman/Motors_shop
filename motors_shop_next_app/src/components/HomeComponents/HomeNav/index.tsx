import ReddirectionButton from "../RedrectionButton";
import { HomeNavStyle } from "./styled";

const HomeNav = ({ cars, motos }: any) => {
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
          <ReddirectionButton link={cars}>Carros</ReddirectionButton>
          <ReddirectionButton link={motos}>Motos</ReddirectionButton>
        </nav>
      </div>
    </HomeNavStyle>
  );
};
export default HomeNav;
