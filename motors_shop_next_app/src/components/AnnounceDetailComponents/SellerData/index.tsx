import { database } from "@/database";
import { SellerDataStyled } from "./styled";

function SellerData() {
  return (
    <SellerDataStyled>
      <p className="sellerNameAbreviation">JS</p>
      <p className="sellerName">Joao Silva</p>
      <p className="sellerDescription">{database.user.descripition}</p>
      <button className="seeAnnounces">Ver todos anúncios</button>
    </SellerDataStyled>
  );
}

export default SellerData;