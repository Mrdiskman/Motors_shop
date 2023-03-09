import { Card, CardInfo } from "./styled";
import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const CardAuction = ({ owner }: any) => {
  return (
    <Card className="card">
      <CardInfo
        className="card info"
        img="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      >
        <span className="card info time">
          <BiTimeFive className="icon clock" />
          <span className="clock">01:58:00</span>
        </span>
        <div className="card desctiption">
          <h3 className="card desctiption title">
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
          </h3>
          <p className="card desctiption sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </div>
        <div className="card owner">
          <span className="card owner inicials">T A</span>
          <span className="card owner name">Tiago Almeida</span>
        </div>
        <div className="card info rotation">
          <div className="info">
            <span className="info box km">0 KM</span>
            <span className="info box year">2019</span>
          </div>
          <span className="info price">R$ 00.000,00</span>
        </div>
      </CardInfo>
      <button className="card link">
        <span className="text">Acessar página do leilão</span>
        <BsArrowRight className="link" />
      </button>
      {owner && (
        <section className="containerPageButton">
          <button className="button_edit">Editar</button>
          <button className="button_edit">Ver como</button>
        </section>
      )}
    </Card>
  );
};

export default CardAuction;
