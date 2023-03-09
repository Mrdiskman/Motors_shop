import { AnnounceContext } from "@/contexts/announce/announceContext";
import { useContext, useEffect, useState } from "react";
import { SellerDataStyled } from "./styled";
import { useRouter } from "next/navigation";

function SellerData({ data }: any) {
  const { setSellerData, sellerData } = useContext(AnnounceContext);
  const router = useRouter();
  useEffect(() => {
    if (data !== undefined) {
      setSellerData(data);
    }
  }, [data]);

  return (
    <SellerDataStyled>
      <p className="sellerNameAbreviation">{sellerData?.abbreviation}</p>
      <p className="sellerName">{sellerData?.name}</p>
      <p className="sellerDescription">{sellerData?.descripition}</p>
      <button
        className="seeAnnounces"
        onClick={() => router.push(`/announcer/${sellerData?.id}`)}
      >
        Veja todos os anuncios
      </button>
    </SellerDataStyled>
  );
}

export default SellerData;
