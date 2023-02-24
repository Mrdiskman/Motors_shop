import { AnnouncerCard } from "./announcerCard.style";

const BuildAnnouncerCard = ({ name, seller, descripition }) => {
  const CompleteNameSplit = name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = name.split("");
  const nameAbreviation = nameSplit[0] + surnameSplit[0];

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

      <button>Criar anúncio</button>
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
