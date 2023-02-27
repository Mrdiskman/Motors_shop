import { database } from "../../database";
import { HeaderStyle, MenuOptions, NavBar } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { Contexts } from "../../contexts/provider";

import React from 'react';
import ReactModal from 'react-modal';
import { Button, Container, Flex, Image, Input , Label, Title, TextArea, divContainer } from "../../styles/styles"


const Header = () => {
  //const { logOut } = useContext(Contexts);

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
            >Editar Perfil</button>  
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
                        <h1>Editar perfil</h1>
                        <button onClick={handleCloseModal}>X</button>
                    </Flex>
                    <p >Infomações pessoais</p>
                    <Label htmlFor="" >Nome 
                    <Input type="text" placeholder="Seu nome" margin  = {'0px 0px 20px 0px'} />
                    </Label>
                    <Label htmlFor="">Email
                      <Input type="email" placeholder="kenzinho@mail.com" margin  = {'0px 0px 20px 0px'}/>
                    </Label>
                    <Label htmlFor="">CPF
                      <Input type="text" placeholder="900.880.090-00" margin  = {'0px 0px 20px 0px'}/>
                    </Label>
                    <Label htmlFor="">Data de nascimento
                      <Input type="date" placeholder="10/01/2023" margin  = {'0px 0px 20px 0px'}/>
                    </Label>
                    <Label htmlFor="">Descrição
                      <TextArea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></TextArea>
                    </Label>
                    <Container                    
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    > 
                      <Button border={'1.5px solid #DEE2E6;'} color={'#495057'} backgroundColor={'#DEE2E6'}>Cancelar</Button>
                      <Button border={'1.5px solid #4529E6;'} color={'#ffffff'} backgroundColor={'#4529E6'}>Salvar alterações</Button>
                    </Container>
                </ReactModal>         
            <button className="option">Editar endereço</button>
            <button className="option">Meus Anúncios</button>
            <button className="option + for onClick={logOut}">
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
            <button onClick={()=>{}} className="option">
              Sair
            </button>
          </div>
        </NavBar>
      )}
    </>
  );
};

export default Header;