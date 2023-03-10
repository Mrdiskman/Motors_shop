import { AnnouncerCard } from "./announcerCard.style";

import {
  Button,
  Container,
  Flex,
  Input,
  OverflowY,
  Title,
} from "@/components/GeneralComponents/index";
import { useContext } from "react";
import { ModalContext } from "@/contexts/Modal/ModalContext";

const BuildAnnouncerCard = ({
  name,
  seller,
  owner,
  abbreviation,
  descripition,
  setIsModal,
}: any) => {
  const { modal, setModal } = useContext(ModalContext);
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
        <Button
          height={"108px"}
          width={"108px"}
          borderRadius={"4px"}
          onClick={() => {
            setIsModal({title: "Criar anúncio"})
            setModal(true)
          }}
        >
          <p>Criar anúncio</p>
        </Button>
      ) : (
        <></>
      )}
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
