import { VehiclePrice, VehicleCard } from "./styled";
type Props = {
  edit?: boolean;
  active?: boolean;
  owner?: string;
  img?: string;
  title?: string;
  descryption?: string;
  announcer?: string;
  km?: number;
  year?: number;
  price?: number;
  abbreviation?: string;
};

const CardVehicle = ({
  edit,
  active,
  owner,
  img,
  title,
  descryption,
  announcer,
  km,
  year,
  price,
  abbreviation,
}: Props) => {
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

        <img src={img} alt={title} />
      </div>
      <h2 className="titleCarrousel">{title}</h2>
      <p className="descriptionCarrousel">{descryption}</p>
      <div className="divAnnouncer">
        <p className="miniatureCarrousel">{abbreviation}</p>
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
        <p className="price">R$ {price},00</p>
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
