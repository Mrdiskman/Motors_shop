import { VehiclePrice, VehicleCard } from "./styled";
type Props = {
  edit?: boolean;
  active?: boolean;
  owner?: string;
};

const CardVehicle = ({ edit, active, owner }: Props) => {
  return (
    <VehicleCard active={active}>
      <div className="div_img">
        {owner ? (
          <div className="div_active">
            <p className="active_title">{active ? "Ativo" : "Inativo"}</p>
          </div>
        ) : (
          <></>
        )}
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
      {edit ? (
        <div className="div_edit">
          <button className="button_edit">Editar</button>
          <button className="button_edit">Ver como</button>
        </div>
      ) : (
        <></>
      )}
    </VehicleCard>
  );
};

export default CardVehicle;
