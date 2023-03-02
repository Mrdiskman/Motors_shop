import { database } from "@/database";
import BuildAnnouncerCard from "../announcerComponent/announcerCard";
import { DivStylesAnnounce } from "./styled";

function AnnounceDescription() {
  return (
    <DivStylesAnnounce className="joao">
      <BuildAnnouncerCard
        name={"kalebe sampaio"}
        seller={true}
        descripition={"skdakdkas"}
      />
    </DivStylesAnnounce>
  );
}

export default AnnounceDescription;
