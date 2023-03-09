import { AnnounceContext } from "@/contexts/announce/announceContext";
import { useContext, useEffect, useState } from "react";
import { SellerDataStyled } from "./styled";

function SellerData({ data }: any) {
  const { setSellerData, sellerData } = useContext(AnnounceContext);
  useEffect(() => {
    if (data !== undefined) {
      setSellerData(data);
    }
  }, [data]);
  console.log(sellerData);

  return (
    <SellerDataStyled>
      <p className="sellerNameAbreviation">{sellerData?.abbreviation}</p>
      <p className="sellerName">{sellerData?.name}</p>
      <p className="sellerDescription">{sellerData?.descripition}</p>
      <button className="seeAnnounces">Veja todos os anuncios</button>
    </SellerDataStyled>
  );
}

export default SellerData;