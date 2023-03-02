import { database } from "@/database";
import { SellerDataStyled } from "./styled";

function AnnounceDescription() {
  const announce = database.user.announcements[0];
  return (
    <SellerDataStyled>
      <h3>Descrição</h3>
      <p className="description">{announce.description}</p>
    </SellerDataStyled>
  );
}

export default AnnounceDescription;
