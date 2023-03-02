import Comments from "@/components/AnnounceDetailComponents/Comments";
import AnnounceData from "@/components/AnnounceDetailComponents/DataAnnounce";
import PrimaryImage from "@/components/AnnounceDetailComponents/MainImage";
import MakeComment from "@/components/AnnounceDetailComponents/MakeComment";
import MiniPictures from "@/components/AnnounceDetailComponents/MiniPictures";
import MiniPicturesDesktop from "@/components/AnnounceDetailComponents/MiniPicturesDeskTop";
import BackGround from "@/components/GeneralComponents/Background";
import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { database } from "@/database";

function AnnounceDetailPage() {
  const announce = database.user.announcements[0];

  return (
    <>
      <Header />
      <BackGround>
        <section>
          <div className="upside">
            <div className="left">
              <PrimaryImage />
              <AnnounceData />

              <div className="containers descriptionContainer">
                <h3>Descrição</h3>
                <p className="description">{announce.description}</p>
              </div>

              <div className="mobileFront">
                <MiniPictures />

                <div className="containers sellerDataSection containerRigths">
                  <p className="sellerNameAbreviation"></p>
                  <p className="sellerName">{database.user.name}</p>
                  <p className="sellerDescription">
                    {database.user.descripition}
                  </p>
                  <button className="seeAnnounces">Ver todos anúncios</button>
                </div>
              </div>

              <Comments />

              <MakeComment />
            </div>

            <div className="deskTopFront">
              <MiniPicturesDesktop />
              <div className="containers sellerDataSection containerRigths">
                <p className="sellerNameAbreviation">JS</p>
                <p className="sellerName">Joao Silva</p>
                <p className="sellerDescription">
                  {database.user.descripition}
                </p>
                <button className="seeAnnounces">Ver todos anúncios</button>
              </div>
            </div>
          </div>
        </section>
      </BackGround>
      <Footer />
    </>
  );
}

export default AnnounceDetailPage;
