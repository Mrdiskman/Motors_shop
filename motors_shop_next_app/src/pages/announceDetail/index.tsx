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
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { AnnounceDetailStyled } from "./styled";

function AnnounceDetailPage() {
  const [announceData, setAnnounceData] = useState({
    id: "",
    model: "",
    description: "",
    km: 0,
    year: 0,
    default_img: "",
    images: [""],
    price: 0,
    isActive: false,
    user: {
			id: "",
			name: "",
			abbreviation: "",
			email: "",
			cpf: "",
			phone: "",
			dateOfBirth: "",
			descripition: "",
			seller: false,
			password: "",
			register: "",
			address: {
				id: "",
				cep: "",
				state: "",
				city: "",
				number: "",
				complement: ""
			}
		},
  });

  useEffect(() => { 
      api
        .get("/announcements/e511d1ba-c203-45ee-bfb7-5c3656bbde5e")
        .then((res: any) => {
          setAnnounceData(res.data);
        })
        .catch((err: any) => console.log(err));
  }, []);
 
  return (
    <>
      <Layout>
        <BackGround>
          <AnnounceDetailStyled>
            <div className="upside">
              <div className="left">
                <PrimaryImage image={announceData.default_img}/>
                <AnnounceData data={announceData} />
                <AnnounceDescription description={announceData.description}/>
                <div className="mobileFront">
                  <MiniPictures images={announceData.images}/>
                  <SellerData/>
                </div>
                <Comments />
                <MakeComment />
              </div>
              <div className="deskTopFront">
                <MiniPicturesDesktop images={announceData.images}/>
                <SellerData/>
              </div>
            </div>
          </AnnounceDetailStyled>
        </BackGround>
      </Layout>
    </>
  );
}

export default AnnounceDetailPage;
