import AnnounceDescription from "@/components/AnnounceDetailComponents/AnnounceDescription";
import Comments from "@/components/AnnounceDetailComponents/Comments";
import AnnounceData from "@/components/AnnounceDetailComponents/DataAnnounce";
import PrimaryImage from "@/components/AnnounceDetailComponents/MainImage";
import MakeComment from "@/components/AnnounceDetailComponents/MakeComment";
import MiniPictures from "@/components/AnnounceDetailComponents/MiniPictures";
import MiniPicturesDesktop from "@/components/AnnounceDetailComponents/MiniPicturesDeskTop";
import SellerData from "@/components/AnnounceDetailComponents/SellerData";
import BackGround from "@/components/GeneralComponents/Background";
import { Layout } from "@/components/Layout";
import AnnounceContextProvider, { AnnounceContext } from "@/contexts/announce/announceContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { AnnounceDetailStyled } from "./styled";
export type announcement = {
  id: string;
  model: string;
  type: string;
  default_img: string;
  images: string[];
  title: string;
  description: string;
  announcer: string;
  km: number;
  isActive: boolean;
  year: number;
  price: number;
  user: user;
  comments: IComments[];
};
type user = {
  name: string;
  abbreviation: string;
  descripition: string;
};
type IComments = {
  id: string;
  text: string;
  created_at: string;
  user: user;
};

function AnnounceDetailPage() {
  const [announceData, setAnnounceData] = useState<null | announcement>(null);
  const {announceId} = useContext(AnnounceContext);
 
  async function announcerData() {
    const result = api
      .get(`/announcements/${announceId}`)

      .then((res: any) => {
        setAnnounceData(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    announcerData();
    console.log(announceId)
  }, [announceId]);
  return (
    <>
      {announceData ? (
        <AnnounceContextProvider>
          <Layout>
            <BackGround>
              <AnnounceDetailStyled>
                <div className="upside">
                  <div className="left">
                    <PrimaryImage image={announceData.default_img} />
                    <AnnounceData data={announceData} />
                    <AnnounceDescription
                      description={announceData.description}
                    />
                    <div className="mobileFront">
                      <MiniPictures images={announceData.images} />
                      <SellerData />
                    </div>
                    <Comments comments={announceData.comments} />
                    <MakeComment />
                  </div>
                  <div className="deskTopFront">
                    <MiniPicturesDesktop images={announceData.images} />
                    <SellerData />
                  </div>
                </div>
              </AnnounceDetailStyled>
            </BackGround>
          </Layout>
        </AnnounceContextProvider>
      ) : (
        <></>
      )}
    </>
  );
}

export default AnnounceDetailPage;
