import { CardAuctionStyle } from "./styled";
import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const CardAuction = () => {
  return (
    <CardAuctionStyle>
      <section className="sectionMainCard">
        <div className="divTime">
          <BiTimeFive color="#4529E6" />
          <p>01:58:00</p>
        </div>
        <h3 className="titleCard">
          Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
        </h3>
        <span className="descriptionCard">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </span>
        <section className="sectionUser">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt=""
          />
          <p>Rodrigo Tavares</p>
        </section>
        <section className="containerInfo">
          <section className="info">
            <div className="divInfo">
              <p>2013</p>
            </div>
            <div className="divInfo">
              <p>0 KM</p>
            </div>
          </section>
          <p>R$ 00.000,00</p>
        </section>
      </section>
      <section className="containerPage">
        <h3>Acessar página do leilão</h3>
        <BsArrowRight className="setaHover" color="#ffffffff" />
      </section>
    </CardAuctionStyle>
  );
};

export default CardAuction;