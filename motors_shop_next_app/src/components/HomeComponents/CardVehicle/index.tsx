import { VehiclePrice, VehicleCard } from "./styled";

const CardVehicle = ({}) => {
  return (
    <VehicleCard>
      <div className="div_img">
        <img src="" alt="" />
      </div>
      userDashboard
      <h1>{}</h1>
      <p>{}</p>
      <div className="divAnnouncer">
        <p className="miniatureCarrousel">{}</p>
        <span className="nameAnnouncer">{}</span>
      </div>
      <VehiclePrice>
        <div className="divItens">
          <div className="km_div">
            <h3 className="numbers">{} KM</h3>
          </div>
          <div className="year_div">
            <h3 className="numbers">{}</h3>
          </div>
        </div>
        <h3 className="price"></h3>
      </VehiclePrice>
    </VehicleCard>
  );
};

export default CardVehicle;
