import { database } from "@/database";
import { CommentsStyled } from "./styled";

function AnnounceData() {
  const announce = database.user.announcements[0];
  return (
    <CommentsStyled>
      <div className="display">
        <h3 className="model">{announce.model}</h3>
        <div className="announceContainerInfo">
          <div className="announceContainerInfoNumbers">
            <span className="announceInfoNumber">{announce.year}</span>
            <span className="announceInfoNumber">{announce.km} KM</span>
          </div>
          <p className="price">R$ {announce.price}</p>
        </div>

        <button className="buy">Comprar</button>
      </div>
    </CommentsStyled>
  );
}
export default AnnounceData;
