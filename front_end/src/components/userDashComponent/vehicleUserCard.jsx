import {
  VehicleUserCard,
  VehicleUserPrice,
} from "./vehicleUserCardComponent.style";

const BuildUserVehicleCard = ({
  img,
  title,
  descryption,
  announcer,
  km,
  year,
  price,
  is_active,
}) => {
  return (
    <VehicleUserCard>
      <div className="div_img">
        <img src={img} alt={title} />
        <p>{is_active}</p>
      </div>
      <h2>{title}</h2>
      <p>{descryption}</p>
      <div className="divAnnouncer">
        <p>{announcer[0]}</p>
        <span>{announcer}</span>
      </div>
      <VehicleUserPrice>
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
      </VehicleUserPrice>
    </VehicleUserCard>
  );
};

export default BuildUserVehicleCard;
