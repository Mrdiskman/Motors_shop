import { database } from "@/database";
import { CommentsStyled } from "./styled";

function AnnounceData({data}:any) {

  return (
    <CommentsStyled>
      <div className="display">
        <h3 className="model">{data.model}</h3>
        <div className="announceContainerInfo">
          <div className="announceContainerInfoNumbers">
            <span className="announceInfoNumber">{data.year}</span>
            <span className="announceInfoNumber">{data.km} KM</span>
          </div>
          <p className="price">R$ {data.price}</p>
        </div>

        <button className="buy">Comprar</button>
      </div>
    </CommentsStyled>
  );
}
export default AnnounceData;
