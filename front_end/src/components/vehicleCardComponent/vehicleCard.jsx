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
  console.log();
  return (
    <VehicleCard>
      <div className="div_img">
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{descryption}</p>
      <div className="divAnnouncer">
        <p>{announcer[0]}</p>
        <span>{announcer}</span>
      </div>
      <VehiclePrice>
        <div className="divItens">
          <div className="km_div">
            <h3>{km}</h3>
          </div>
          <div className="year_div">
            <h3>{year}</h3>
          </div>
        </div>
        <h3>
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
