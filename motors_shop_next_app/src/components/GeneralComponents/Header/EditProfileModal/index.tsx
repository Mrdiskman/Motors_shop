import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import ReactModal from "react-modal";
import { Flex, Button, Container, Input, Label, TextArea } from "../..";
function ModalEditProfile() {
  const { handleCloseModal, isModalOpen } = useContext(HeaderContext);
  const customStyles = {
    content: {
      top: "5%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0%)",
      height: "1252px",
      width: "520px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
    },
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        margin={"0px 0px 40px 0px"}
      >
        <h1>Editar perfil</h1>
        <button onClick={handleCloseModal}>X</button>
      </Flex>
      <p>Infomações pessoais</p>
      <Label htmlFor="">
        Nome
        <Input type="text" placeholder="Seu nome" margin={"0px 0px 20px 0px"} />
      </Label>
      <Label htmlFor="">
        Email
        <Input
          type="email"
          placeholder="kenzinho@mail.com"
          margin={"0px 0px 20px 0px"}
        />
      </Label>
      <Label htmlFor="">
        CPF
        <Input
          type="text"
          placeholder="900.880.090-00"
          margin={"0px 0px 20px 0px"}
        />
      </Label>
      <Label htmlFor="">
        Data de nascimento
        <Input
          type="date"
          placeholder="10/01/2023"
          margin={"0px 0px 20px 0px"}
        />
      </Label>
      <Label htmlFor="">
        Descrição
        <TextArea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></TextArea>
      </Label>
      <Container width={"100%"} display={"flex"} alignItems={"center"}>
        <Button
          border={"1.5px solid #DEE2E6;"}
          color={"#495057"}
          backgroundColor={"#DEE2E6"}
        >
          Cancelar
        </Button>
        <Button
          border={"1.5px solid #4529E6;"}
          color={"#ffffff"}
          backgroundColor={"#4529E6"}
        >
          Salvar alterações
        </Button>
      </Container>
    </ReactModal>
  );
}
export default ModalEditProfile;
