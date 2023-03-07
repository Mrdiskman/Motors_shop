import { database } from "@/database";
import BuildAnnouncerCard from "../announcerComponent/announcerCard";
import { DivStylesAnnounce } from "./styled";

function AnnounceDescription({ owner, name, abbreviation, descripition }: any) {
  return (
    <DivStylesAnnounce>
      <BuildAnnouncerCard
        name={name}
        seller={true}
        descripition={descripition}
        owner={owner}
        abbreviation={abbreviation}
      />
    </DivStylesAnnounce>
  );
}

export default AnnounceDescription;
