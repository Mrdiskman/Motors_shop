import { AnnouncerCard } from "./announcerCard.style";

import {
  Button,
  Container,
  Flex,
  Input,
  OverflowY,
  Title,
} from "@/components/GeneralComponents/index";

const BuildAnnouncerCard = ({
  name,
  seller,
  owner,
  abbreviation,
  descripition,
}: any) => {
  return (
    <AnnouncerCard>
      <div className="containerDiv">
        <p className="sellerNameAbreviation">{abbreviation?.toUpperCase()}</p>
        <div className="dataContainerAnnouncer">
          <p className="sellerName">{name}</p>
          <p className="sellerRole">Anunciante</p>
        </div>
        <p className="sellerDescription">{descripition}</p>
      </div>
      {owner ? (
        <Button height={"108px"} width={"108px"} borderRadius={"4px"}>
          <p>Criar anúncio</p>
        </Button>
      ) : (
        <></>
      )}
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
