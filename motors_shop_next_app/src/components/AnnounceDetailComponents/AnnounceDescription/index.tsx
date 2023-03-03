import { SellerDataStyled } from "./styled";

function AnnounceDescription({ description }: any) {
  return (
    <SellerDataStyled>
      <h3>Descrição</h3>
      <p className="description">{description}</p>
    </SellerDataStyled>
  );
}

export default AnnounceDescription;
