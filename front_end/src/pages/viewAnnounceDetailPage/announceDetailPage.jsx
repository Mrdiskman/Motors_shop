import "../../reset.css";
import BackGround from "../../components/backgroundComponent/background";
import Footer from "../../components/footerComponent/footer";
import Header from "../../components/headerComponent/header";
import { database } from "../../database/index";
import { SectionPictures } from "./announceDetailStyled";

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Container, Flex, Image } from "../../style/styles";

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


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '365px',
      width: '344px'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)'
    }
  };


  return (
    <>
      <Header />
      <BackGround>
        <SectionPictures>
          <div className="upside">
            <div className="left">
              <div className="containers mainPicCOntainer">
                <img
                  src={primaryImage}
                  alt="Foto do carro"
                  className="MainPicture"
                />
              </div>

              <div className="containers dataAnnounce">
                <div className="display">
                  <h3 className="model">{announce.model}</h3>
                  <div className="announceContainerInfo">
                    <div className="announceContainerInfoNumbers">
                      <span className="announceInfoNumber">
                        {announce.year}
                      </span>
                      <span className="announceInfoNumber">
                        {announce.km} KM
                      </span>
                    </div>
                    <p className="price">R$ {announce.price}</p>
                  </div>

                  <button className="buy">Comprar</button>
                </div>
              </div>

              <div className="containers descriptionContainer">
                <h3>Descrição</h3>
                <p className="description">{announce.description}</p>
              </div>

              <div className="mobileFront">
                <div className="containers containerPics containerRigths">
                  <h2 className="titlePhotos">Fotos</h2>
                  <ul className="ulListImages">
                    {miniPictures.map((elem, index) => (
                        <li key={index} className="listImages">
                            <Button 
                                onClick={handleOpenModal}
                                height={'108px'}
                                width={'108px'}
                                borderRadius={'4px'}
                            >
                                <Image
                                    src={elem}
                                    alt="fotos dos carros"
                                    height="108"
                                    width="108"
                                />
                            </Button>
                            <ReactModal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Modal"
                                style={customStyles}
                            >
                                <Flex
                                    flexDirection = {'row'}
                                    justifyContent = {'space-between'}
                                    margin  = {'0px 0px 40px 0px'}  
                                >
                                    <h1>Imagem do Veiculo</h1>
                                    <button onClick={handleCloseModal}>X</button>
                                </Flex>
                                <Image
                                    src={elem}
                                    alt="fotos dos carros"
                                    className="detailPictures"
                                    height="239"
                                    width="312"
                                />
                            </ReactModal>
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="containers sellerDataSection containerRigths">
                  <p className="sellerNameAbreviation">{nameAbreviation}</p>
                  <p className="sellerName">{database.user.name}</p>
                  <p className="sellerDescription">
                    {database.user.descripition}
                  </p>
                  <button className="seeAnnounces">Ver todos anúncios</button>
                </div>
              </div>

              <section className="containers containerCommentData">
                <ul className="containerListComments">
                  <li className="comments">
                    <div className="dataComments">
                      <p className="abreviationNameComment">JP</p>
                      <p className="nameComment">João Pedro</p>
                    </div>
                    <p className="descriptionComment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur consequat urna pellentesque, condimentum lacus
                      quis, ullamcorper leo. Class Curabitur lobortis ligula ut
                      urna feugiat malesuada. Sed consectetur lorem egestas,
                      finibus dolor a, dignissim urna. Mauris turpis sem,
                      lacinia sed nibh ut, mollis rutrum mauris. Nam tempus erat
                      vel consequat mattis.
                    </p>
                  </li>

                  <li className="comments">
                    <div className="dataComments">
                      <p className="abreviationNameComment">AC</p>
                      <p className="nameComment">Arminda Cantarelli</p>
                    </div>
                    <p className="descriptionComment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur consequat urna pellentesque, condimentum lacus
                      quis, ullamcorper leo. Class Curabitur lobortis ligula ut
                      urna feugiat malesuada. Sed consectetur lorem egestas,
                      finibus dolor a, dignissim urna. Mauris turpis sem,
                      lacinia sed nibh ut, mollis rutrum mauris. Nam tempus erat
                      vel consequat mattis.
                    </p>
                  </li>

                  <li className="comments">
                    <div className="dataComments">
                      <p className="abreviationNameComment">JT</p>
                      <p className="nameComment">João Texeira</p>
                    </div>
                    <p className="descriptionComment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur consequat urna pellentesque, condimentum lacus
                      quis, ullamcorper leo. Class Curabitur lobortis ligula ut
                      urna feugiat malesuada. Sed consectetur lorem egestas,
                      finibus dolor a, dignissim urna. Mauris turpis sem,
                      lacinia sed nibh ut, mollis rutrum mauris. Nam tempus erat
                      vel consequat mattis.
                    </p>
                  </li>
                </ul>
              </section>
              <div className="containers containerMakeComment">
                <div className="makeCommentUserData">
                  <p className="makeCommentNameAbreviation">
                    {nameAbreviation}
                  </p>
                  <p className="nameMakeComment">{database.user.name}</p>
                </div>
                <input
                  type="text"
                  className="inputComment"
                  placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                />
                <button className="buttonMakeComment">Comentar</button>
                <div className="like">
                  <span className="autoComment">Gostei muito!</span>
                  <span className="autoComment">Incrível</span>
                </div>
                <span className="autoComment">
                  Recomendarei para meus amigos!
                </span>
              </div>
            </div>

            <div className="deskTopFront">
              <div className="containers containerPics containerRigths">
                <h2 className="titlePhotos">Fotos</h2>
                <ul className="ulListImages">
                  {miniPictures.map((elem, index) => (
                    <li key={index} className="listImages">
                        <Button 
                            onClick={handleOpenModal}
                            height={'108px'}
                            width={'108px'}
                            borderRadius={'4px'}
                        >
                            <Image
                                src={elem}
                                alt="fotos dos carros"
                                height="108"
                                width="108"
                            />
                        </Button>
                        <ReactModal
                            isOpen={isModalOpen}
                            onRequestClose={handleCloseModal}
                            contentLabel="Modal"
                            style={customStyles}
                        >
                            <Flex
                              flexDirection = {'row'}
                              justifyContent = {'space-between'}
                              margin  = {'0px 0px 40px 0px'}  
                            >
                                <h1>Imagem do Veiculo</h1>
                                <button onClick={handleCloseModal}>X</button>
                            </Flex>
                            <Image
                                src={elem}
                                alt="fotos dos carros"
                                className="detailPictures"
                                height="239"
                                width="312"
                            />
                        </ReactModal>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="containers sellerDataSection containerRigths">
                <p className="sellerNameAbreviation">{nameAbreviation}</p>
                <p className="sellerName">{database.user.name}</p>
                <p className="sellerDescription">
                  {database.user.descripition}
                </p>
                <button className="seeAnnounces">Ver todos anúncios</button>
              </div>
            </div>
          </div>
        </SectionPictures>
      </BackGround>
      <Footer />
    </>
  );
};

export default AnnounceDetailPage;
