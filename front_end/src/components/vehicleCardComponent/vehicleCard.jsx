import { carsData } from "./carsDatabase";
import { motorcyclesData } from "./motorcyclesDatabase";
import { VehicleCard, VehiclePrice } from "./vehicleCardComponent.style";
import { VehicleContainer } from "./vehicleContainerComponent.style";

const BuildVehicleCard = () => {
  console.log(carsData);
  console.log(motorcyclesData);
  return (
    <>
      <VehicleContainer>
        <h1>Carros</h1>
        <VehicleCard>
          <div className="div_img">
            <img src={carsData[0].img} alt={carsData[0].title} />
          </div>
          <h2>{carsData[0].title}</h2>
          <p>{carsData[0].descryption}</p>
          <span>{carsData[0].announcer}</span>
          <VehiclePrice>
            <div>
              <div className="km_div">
                <h3>{carsData[0].km}</h3>
              </div>
              <div className="year_div">
                <h3>{carsData[0].year}</h3>
              </div>
            </div>
            <h3>{carsData[0].price}</h3>
          </VehiclePrice>
        </VehicleCard>
        <h1>Motos</h1>
        <VehicleCard>
          <div className="div_img">
            <img src={motorcyclesData[0].img} alt={motorcyclesData[0].title} />
          </div>
          <h2>{motorcyclesData[0].title}</h2>
          <p>{motorcyclesData[0].descryption}</p>
          <span>{motorcyclesData[0].announcer}</span>
          <VehiclePrice>
            <div>
              <div className="km_div">
                <h3>{motorcyclesData[0].km}</h3>
              </div>
              <div className="year_div">
                <h3>{motorcyclesData[0].year}</h3>
              </div>
            </div>
            <h3>{motorcyclesData[0].price}</h3>
          </VehiclePrice>
        </VehicleCard>
      </VehicleContainer>
    </>
  );
};

export default BuildVehicleCard;
