import { VehicleCard, VehiclePrice } from "./vehicleCardComponent.style";

const BuildVehicleCard = ({
  img,
  title,
  descryption,
  announcer,
  km,
  year,
  price,
}) => {
  return (
    <VehicleCard>
      <div className="div_img">
        <img src={img} alt={title} />
      </div>
      <h2 className="titleCarrousel">{title}</h2>
      <p className="descriptionCarrousel">{descryption}</p>
      <div className="divAnnouncer">
        <p className="miniatureCarrousel">{announcer[0]}</p>
        <span className="nameAnnouncer">{announcer}</span>
      </div>
      <VehiclePrice>
        <div className="divItens">
          <div className="km_div">
            <h3 className="numbers">{km} KM</h3>
          </div>
          <div className="year_div">
            <h3 className="numbers">{year}</h3>
          </div>
        </div>
        <h3 className="price">
          {parseInt(price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
      </VehiclePrice>
    </VehicleCard>
  );
};

export default BuildVehicleCard;
