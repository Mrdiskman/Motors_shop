import { database } from "../../database";
import { HeaderStyle, MenuOptions, NavBar } from "./headerStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { Contexts } from "../../contexts/provider";

import React from 'react';
import ReactModal from 'react-modal';
import { Button, Container, Flex, Image, Input , Title } from "../../style/styles";

const Header = () => {
  const { logOut } = useContext(Contexts);

  const CompleteNameSplit = database.user.name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = database.user.name.split("");
  const nameAbreviation = nameSplit[0] + surnameSplit[0];

  const [navMobile, setNavMobile] = useState(false);
  const [navDesktop, setNavDesktop] = useState(false);
  function toggleMobile() {
    if (navMobile) {
      return setNavMobile(false);
    }
    setNavMobile(true);
  }
  function toggleDeskTop() {
    if (navDesktop) {
      return setNavDesktop(false);
    }
    setNavDesktop(true);
  }


  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      top: '5%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, 0%)',
      height: '1252px',
      width: '520px'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)'
    }
  };


  return (
    <>
      <HeaderStyle>
        <h1 className="title">
          Motors <span className="titleStyle">shop</span>
        </h1>
        <nav className="navBar">
          <ul className="containerList">
            <li>Carros</li>
            <li>Motos</li>
            <li>Leilao</li>
          </ul>
        </nav>
        <div className="userDataContainer" onClick={() => toggleDeskTop()}>
          <div className="containerNameAbreviation">
            <p className="nameAbreviation">{nameAbreviation}</p>
          </div>
          <p className="userName">{database.user.name}</p>
        </div>
        <button onClick={() => toggleMobile()} className="btnMobile">
          <GiHamburgerMenu className="menuMobileStyle" />
        </button>
      </HeaderStyle>
      {navDesktop && (
        <MenuOptions>
          <div className="conteinerOptions">
            <button                 
                className="option"
                onClick={handleOpenModal}
            >Editar Perfil Modal</button>  
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
                    
                </ReactModal>         
            <button className="option">Editar endereço</button>
            <button className="option">Meus Anúncios</button>
            <button onClick={logOut} className="option">
              Sair
            </button>
          </div>
        </MenuOptions>
        
      )}

      {navMobile && (
        <NavBar>
          <ul className="listContainerMobile">
            <li className="listMobile">Carros</li>
            <li className="listMobile">Motos</li>
            <li className="listMobile">Leilao</li>
          </ul>
          <div className="conteinerOptionsMobile ">
            <button className="option">Editar Perfil</button>
            <button className="option">Editar endereço</button>
            <button className="option">Meus Anúncios</button>
            <button onClick={logOut} className="option">
              Sair
            </button>
          </div>
        </NavBar>
      )}
    </>
  );
};

export default Header;
