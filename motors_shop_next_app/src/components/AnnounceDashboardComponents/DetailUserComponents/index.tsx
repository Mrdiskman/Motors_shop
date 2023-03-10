import BuildAnnouncerCard from "../announcerComponent/announcerCard";
import { DivStylesAnnounce } from "./styled";

function AnnounceDescription({ owner, name, abbreviation, descripition,setIsModal }: any) {
  
  return (
    <DivStylesAnnounce>
      <BuildAnnouncerCard
        name={name}
        seller={true}
        descripition={descripition}
        owner={owner}
        abbreviation={abbreviation}
        setIsModal={setIsModal}
      />
    </DivStylesAnnounce>
  );
}

export default AnnounceDescription;
