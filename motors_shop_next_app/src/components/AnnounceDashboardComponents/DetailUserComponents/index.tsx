import { database } from "@/database";
import BuildAnnouncerCard from "../announcerComponent/announcerCard";
import { DivStylesAnnounce } from "./styled";

function AnnounceDescription({ owner }: any) {
  return (
    <DivStylesAnnounce className="joao">
      <BuildAnnouncerCard
        name={"kalebe sampaio"}
        seller={true}
        descripition={"skdakdkas"}
        owner={owner}
      />
    </DivStylesAnnounce>
  );
}

export default AnnounceDescription;
