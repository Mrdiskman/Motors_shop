import { AnnouncerCard } from "./announcerCard.style";

const BuildAnnouncerCard = ({ name, seller, descripition }) => {
  const CompleteNameSplit = name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = name.split("");
  const nameAbreviation = nameSplit[0] + surnameSplit[0];

  return (
    <AnnouncerCard>
      <div>
        <p className="sellerNameAbreviation">{nameAbreviation}</p>
        <p className="sellerName">{name}</p>
        <p className="sellerRole">Anunciante</p>
        <p className="sellerDescription">{descripition}</p>
      </div>

      <button>
        <p>Criar anúncio</p>
      </button>
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
