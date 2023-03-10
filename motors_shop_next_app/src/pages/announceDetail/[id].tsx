import AnnounceDescription from "@/components/AnnounceDetailComponents/AnnounceDescription";
import Comments from "@/components/AnnounceDetailComponents/Comments";
import AnnounceData from "@/components/AnnounceDetailComponents/DataAnnounce";
import PrimaryImage from "@/components/AnnounceDetailComponents/MainImage";
import MakeComment from "@/components/AnnounceDetailComponents/MakeComment";
import MiniPictures from "@/components/AnnounceDetailComponents/MiniPictures";
import MiniPicturesDesktop from "@/components/AnnounceDetailComponents/MiniPicturesDeskTop";
import SellerData from "@/components/AnnounceDetailComponents/SellerData";
import BackGround from "@/components/GeneralComponents/Background";
import Modal from "@/components/GeneralComponents/Modal";
import { IProps } from "@/components/GeneralComponents/Modal/modalRequest";
import { Layout } from "@/components/Layout";
import { ModalContext } from "@/contexts/Modal/ModalContext";
import { api } from "@/services/api";
import { useRouter } from "next/router";
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
  user: IUser;
  comments: IComments[];
};
export type IUser = {
  id: string;
  name: string;
  abbreviation: string;
  descripition: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  seller: boolean;
  password: string;
  register: string;
  resetCode: string | null;
  address: object;
};
type IComments = {
  id: string;
  text: string;
  created_at: string;
  user: IUser;
};
function AnnounceDetailPage() {
  const [announceData, setAnnounceData] = useState<null | announcement>(null);
  const { modal, setModal, setCommentId } = useContext(ModalContext);
  const { query } = useRouter();
  const [isModal, setIsModal] = useState<IProps>({ title: "Sucesso!" });

  async function announcerData() {
    const result = api
      .get(`/announcements/${query.id}`)

      .then((res: any) => {
        setAnnounceData(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    if (query.id) {
      announcerData();
    }
  }, [query]);
  return (
    <>
      {announceData ? (
        <>
          <Modal title={isModal.title} />
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
                      {announceData.user ? (
                        <SellerData data={announceData.user} />
                      ) : null}
                    </div>
                    <Comments
                      comments={announceData.comments}
                      setIsModel={setIsModal}
                    />
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
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AnnounceDetailPage;
