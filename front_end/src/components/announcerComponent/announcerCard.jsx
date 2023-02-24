import { AnnouncerCard } from "./announcerCard.style";


import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Container, Flex, Image, Input , OverflowY, Title } from "../../style/styles";


const BuildAnnouncerCard = ({ name, seller, descripition }) => {
  const CompleteNameSplit = name.split(" ");
  const surname = CompleteNameSplit[1];
  const surnameSplit = surname.split("");
  const nameSplit = name.split("");
  const nameAbreviation = nameSplit[0] + surnameSplit[0];

    
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
      minHeight: '1252px',
      // height: 'fit-content',
      width: '90vw'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)'
    }
    // @media (min-width: 769px) {

    // }
  };

  return (
    <AnnouncerCard>
      <div>
        <p className="sellerNameAbreviation">{nameAbreviation}</p>
        <p className="sellerName">{name}</p>
        <p className="sellerRole">Anunciante</p>
        <p className="sellerDescription">{descripition}</p>
      </div>

      <Button 
          onClick={handleOpenModal}
          height={'108px'}
          width={'108px'}
          borderRadius={'4px'}
      >
        <p>Criar anúncio</p>
      </Button>

      <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Modal"
          style={customStyles}

      >
        <OverflowY>
          
          <Flex
              flexDirection = {'row'}
              justifyContent = {'space-between'}
              margin  = {'0px 0px 40px 0px'}  
          >
              <h2>Editar Anuncio</h2>
              <Button 
                onClick={handleCloseModal}
                color={'#000'}
                height={'24px'}
                width={'24px'}
              >
                <p>X</p>
              </Button>
          </Flex>
         
          <Flex
              flexDirection = {'row'}
              justifyContent = {'space-between'}
              margin  = {'0px 0px 40px 0px'}  
          >
              
              <Button 
                onClick={handleCloseModal}
                backgroundColor={'#4529E6'}
                color={'#FFFFFF'}
                height={'50px'}
                width={'220px'}
                border={'1px solid #ADB5BD;'}
                fontWeight={'600'}
                fontSize={'18px'}
                margin={'10px'}
              >
                <p>Venda</p>
              </Button>
              <Button 
                onClick={handleCloseModal}
                color={'#000'}
                height={'50px'}
                width={'220px'}
                border={'1px solid #ADB5BD;'}
                border-radius={'5px'}
                fontWeight={'600'}
                fontSize={'18px'}
                margin={'10px'}
              >
                <p>Leilão</p>
              </Button>  
          </Flex>

          <Title 
             marginBottom={'25px'}
             fontWeight={500}
             color={'#000'}
             fontSize={'16px'}
          >
          <p>Infomações do veículo</p>
          </Title>

          <Title
              marginBottom={'40px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Título</p>
          </Title><br/>

          <Input placeholder="Digitar título" width={'85%'}></Input>
          <Flex
              flexDirection = {'row'}
              justifyContent = {'space-between'}
              margin  = {'20px 0px 0px 0px'}  
          >
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Ano</p>
          </Title><br/>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Quilometragem</p>
          </Title><br/>
          </Flex>
          <Flex
              flexDirection = {'row'}
              justifyContent = {'space-between'}
              margin  = {'10px 0px 40px 0px'}  
              gap = {'10px'}
          >
            <Input placeholder="2018" width={'85%'}></Input>
            <Input placeholder="0" width={'85%'}></Input>
          </Flex>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Preço</p>
          </Title><br/>
          <Input placeholder="50.000,00" width={'85%'}></Input>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Decriçao</p>
          </Title><br/>
          <Input placeholder="50.000,00" width={'85%'} height={'50px'}></Input>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>Titulo de veiculo</p>
          </Title><br/>
          <Flex
              flexDirection = {'row'}
              justifyContent = {'space-between'}
              margin  = {'10px 0px 40px 0px'}  
              gap = {'10px'}
          >
              <Button 
                onClick={handleCloseModal}
                backgroundColor={'#4529E6'}
                color={'#FFFFFF'}
                height={'50px'}
                width={'220px'}
                border={'1px solid #ADB5BD;'}
                fontWeight={'600'}
                fontSize={'18px'}
                margin={'10px'}
              >
                <p>Carro</p>
              </Button>
              <Button 
                onClick={handleCloseModal}
                color={'#000'}
                height={'50px'}
                width={'220px'}
                border={'1px solid #ADB5BD;'}
                border-radius={'5px'}
                fontWeight={'600'}
                fontSize={'18px'}
                margin={'10px'}
              >
                <p>Moto</p>
              </Button>  
          </Flex>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'14px'}
          > 
            <p>imagem da capa</p>
          </Title><br/>
          <Input placeholder="Inserir Url da imagem" width={'85%'}></Input>
          <Title
              marginBottom={'0px'}
              fontWeight={500}
              color={'#000'}
              fontSize={'16px'}
          > 
            <p> 1º Imagem da Galeria </p>
          </Title><br/>
          <Input placeholder="Inserir Url da imagem" width={'85%'}></Input>

          <Button 
                onClick={handleCloseModal}
                color={'#000'}
                height={'50px'}
                width={'fitContent'}
                border={'1px solid #ADB5BD;'}
                border-radius={'5px'}
                fontWeight={'600'}
                fontSize={'18px'}
                margin={'10px'}
              >
                <p>Adicionar campo para imagem da galeria</p>
              </Button> 
        </OverflowY>
      </ReactModal>
    </AnnouncerCard>
  );
};

export default BuildAnnouncerCard;
