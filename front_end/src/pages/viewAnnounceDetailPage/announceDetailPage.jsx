import BackGround from "../../components/backgroundComponent/background";
import Header from "../../components/headerComponent/header";
import { database } from "../../database/index";
import { SectionPictures } from "./announceDetailStyled";
import { IoIosArrowUp } from "react-icons/io";
const AnnounceDetailPage = () => {
  const CompleteNameSplit = database.user.name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = database.user.name.split("");
  const nameAbreviation = nameSplit[0] + surnameSplit[0];

  const images = database.user.announcements.map(
    (annoucement) => annoucement.pictures
  );
  const miniPictures = images.join("").split(",");
  const primaryImage = images[0][0];
  const announce = database.user.announcements[0];

  return (
    <>
      <Header />
      <BackGround>
        <SectionPictures>
          <div>
            <div className="containerPrimaryPicture">
              <img
                src={primaryImage}
                alt="Foto do carro"
                className="MainPicture"
              />
            </div>

            <div className="containerData">
              <h3 className="model">{announce.model}</h3>

              <div className="announceContainerInfo">
                <div className="announceContainerInfoNumbers">
                  <span className="announceInfoNumber">{announce.year}</span>
                  <span className="announceInfoNumber">{announce.km} KM</span>
                </div>
                <p className="price">R${announce.price}</p>
              </div>

              <button className="buy">Comprar</button>
            </div>

            <div className="containerDescription">
              <h3>Descrição</h3>
              <p className="description">{announce.description}</p>
            </div>
          </div>

          <div>
            <div className="divMiniPics">
              <h2 className="titlePhotos">Fotos</h2>
              <ul className="containerMiniPictures">
                {miniPictures.map((elem, index) => (
                  <li key={index} className="listImages">
                    <img
                      src={elem}
                      alt="fotos dos carros"
                      className="miniPictures"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="sellerDataSection">
              <p className="sellerNameAbreviation">{nameAbreviation}</p>
              <p className="sellerName">{database.user.name}</p>
              <p className="sellerDescription">{database.user.descripition}</p>
              <button className="seeAnnounces">Ver todos anúncios</button>
            </div>
          </div>
          <section className="containerCommentData">
            <ul className="containerListComments">
              <li className="comments">
                <div className="dataComments">
                  <p className="abreviationNameComment">JP</p>
                  <p className="nameComment">João Pedro</p>
                </div>
                <p className="descriptionComment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur consequat urna pellentesque, condimentum lacus quis,
                  ullamcorper leo. Class Curabitur lobortis ligula ut urna
                  feugiat malesuada. Sed consectetur lorem egestas, finibus
                  dolor a, dignissim urna. Mauris turpis sem, lacinia sed nibh
                  ut, mollis rutrum mauris. Nam tempus erat vel consequat
                  mattis.
                </p>
              </li>

              <li className="comments">
                <div className="dataComments">
                  <p className="abreviationNameComment">AC</p>
                  <p className="nameComment">Arminda Cantarelli</p>
                </div>
                <p className="descriptionComment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur consequat urna pellentesque, condimentum lacus quis,
                  ullamcorper leo. Class Curabitur lobortis ligula ut urna
                  feugiat malesuada. Sed consectetur lorem egestas, finibus
                  dolor a, dignissim urna. Mauris turpis sem, lacinia sed nibh
                  ut, mollis rutrum mauris. Nam tempus erat vel consequat
                  mattis.
                </p>
              </li>

              <li className="comments">
                <div className="dataComments">
                  <p className="abreviationNameComment">JT</p>
                  <p className="nameComment">João Texeira</p>
                </div>
                <p className="descriptionComment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur consequat urna pellentesque, condimentum lacus quis,
                  ullamcorper leo. Class Curabitur lobortis ligula ut urna
                  feugiat malesuada. Sed consectetur lorem egestas, finibus
                  dolor a, dignissim urna. Mauris turpis sem, lacinia sed nibh
                  ut, mollis rutrum mauris. Nam tempus erat vel consequat
                  mattis.
                </p>
              </li>
            </ul>
          </section>
          <div className="containerMakeComment">
            <div className="makeCommentUserData">
              <p className="makeCommentNameAbreviation">{nameAbreviation}</p>
              <p className="nameMakeComment">{database.user.name}</p>
            </div>
            <input type="text" className="inputComment" />
            <button className="buttonMakeComment">Comentar</button>
            <div className="like">
              <span className="autoComment">Gostei muito!</span>
              <span className="autoComment">Incrível</span>
            </div>
            <span className="autoComment">Recomendarei para meus amigos!</span>
          </div>

          <footer className="footerAnnounce">
            <h1 className="titleFooter">Motors <span className="spanTitleFooter">shop</span></h1>
            <p>© 2022 -  Todos os direitos reservados.</p>
            <button className="upPage"><IoIosArrowUp/></button>
          </footer>
        </SectionPictures>
      </BackGround>
    </>
  );
};

export default AnnounceDetailPage;
