import { AnnouncerCard } from "./announcerCard.style";

import {
  Button,
  Container,
  Flex,
  Input,
  OverflowY,
  Title,
} from "@/components/GeneralComponents/index";

const BuildAnnouncerCard = ({ name, seller, descripition }: any) => {
  const CompleteNameSplit = name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = name.split("");
  const nameAbreviation =
    nameSplit[0].toUpperCase() + surnameSplit[0].toUpperCase();

  const customStyles = {
    content: {
      top: "5%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0%)",
      minHeight: "1252px",
      width: "90vw",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <AnnouncerCard>
      <div className="containerDiv">
        <p className="sellerNameAbreviation">{nameAbreviation}</p>
        <div className="dataContainerAnnouncer">
          <p className="sellerName">{name}</p>
          <p className="sellerRole">Anunciante</p>
        </div>
        <p className="sellerDescription">{descripition}</p>
      </div>

      <Button height={"108px"} width={"108px"} borderRadius={"4px"}>
        <p>Criar anúncio</p>
      </Button>
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
