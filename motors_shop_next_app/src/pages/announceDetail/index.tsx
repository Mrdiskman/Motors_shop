import AnnounceDescription from "@/components/AnnounceDetailComponents/AnnounceDescription";
import Comments from "@/components/AnnounceDetailComponents/Comments";
import AnnounceData from "@/components/AnnounceDetailComponents/DataAnnounce";
import PrimaryImage from "@/components/AnnounceDetailComponents/MainImage";
import MakeComment from "@/components/AnnounceDetailComponents/MakeComment";
import MiniPictures from "@/components/AnnounceDetailComponents/MiniPictures";
import MiniPicturesDesktop from "@/components/AnnounceDetailComponents/MiniPicturesDeskTop";
import SellerData from "@/components/AnnounceDetailComponents/SellerData";
import BackGround from "@/components/GeneralComponents/Background";
import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { AnnounceDetailStyled } from "./styled";

function AnnounceDetailPage() {
  return (
    <>
      <Header />
      <BackGround>
        <AnnounceDetailStyled>
          <div className="upside">
            <div className="left">
              <PrimaryImage />
              <AnnounceData />
              <AnnounceDescription />
              <div className="mobileFront">
                <MiniPictures />
                <SellerData />
              </div>
              <Comments />
              <MakeComment />
            </div>
            <div className="deskTopFront">
              <MiniPicturesDesktop />
              <SellerData />
            </div>
          </div>
        </AnnounceDetailStyled>
      </BackGround>
      <Footer />
    </>
  );
}

export default AnnounceDetailPage;