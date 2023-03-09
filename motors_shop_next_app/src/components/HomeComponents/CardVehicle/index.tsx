import { Card, CardImg, CardInfo } from "./styled";
type Props = {
  id?: string;
  edit?: boolean;
  active?: boolean;
  owner?: string;
  img?: string;
  title?: string;
  description?: string;
  announcer?: string;
  km?: number;
  year?: number;
  price?: number;
  abbreviation?: string;
};

const CardVehicle = ({
  id,
  edit,
  active,
  owner,
  img,
  title,
  description,
  announcer,
  km,
  year,
  price,
  abbreviation,
}: Props) => {
  return (
    <Card
      active={active}
      className="card"
      id={id}
      onClick={() => console.log("click")}
    >
      <CardImg className="card img" img={img} />
      <CardInfo className="card info">
        <h3 className="card title">Product title stays here - max 1 line</h3>
        <p className="card description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        {/* <h3 className="card title">{title}</h3>
        <p className="card description">{description}</p> */}
        <div className="card owner">
          <span className="card owner inicials">T A</span>
          <span className="card owner name">Tiago Almeida</span>
          {/* <span className="card owner inicials">{abbreviation}</span> */}
          {/* <span className="card owner name">{owner}</span> */}
        </div>
        <div className="card info rotation">
          <div className="info">
            <span className="info box km">0 KM</span>
            <span className="info box year">2019</span>
            {/* <span className="info km">{`${km} KM`}</span>
            <span className="info year">{year}</span> */}
          </div>
          <span className="info price">R$ 00.000,00</span>
          {/* <span className="info price">{`R$ ${price},00`}</span> */}
        </div>
      </CardInfo>
    </Card>
  );
};

export default CardVehicle;
