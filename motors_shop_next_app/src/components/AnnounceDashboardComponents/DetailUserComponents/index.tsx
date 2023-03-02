import { database } from "@/database";
import BuildAnnouncerCard from "../announcerComponent/announcerCard";
import { DivStylesAnnounce } from "./styled";

function AnnounceDescription() {
  return (
    <DivStylesAnnounce>
      <BuildAnnouncerCard
        name={"kalebe sampaio"}
        seller={true}
        descripition={"skdakdkas"}
      />
    </DivStylesAnnounce>
  );
}

export default AnnounceDescription;
