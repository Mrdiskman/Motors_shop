import { ModalContext } from "@/contexts/Modal/ModalContext";
import { useContext } from "react";

import Button from "../Button";
import Input from "../Input";

export interface IProps {
  title:
    | "Sucesso!"
    | "Conta criada com sucesso!"
    | "Editar perfil"
    | "Excluir anúncio";
}

const ModalRequest = ({ title }: IProps): JSX.Element => {
  const { setModal } = useContext(ModalContext);

  switch (title) {
    case "Sucesso!":
      return (
        <>
          <h2 className="title succes">Seu anúncio foi criado com sucesso!</h2>
          <span className="subtitle succes">
            Agora você poderá ver seus negócios crescendo em grande escala
          </span>
        </>
      );
    case "Conta criada com sucesso!":
      return (
        <>
          <h2 className="title creation">Sua conta foi criada com sucesso!</h2>
          <span className="subtitle creation">
            Agora você poderá ver seus negócios crescendo em grande escala{" "}
          </span>
          <Button
            className="exit login"
            onClick={() => {
              setModal(false);
            }}
          >
            Ir para o login
          </Button>
        </>
      );
    case "Editar perfil":
      return (
        <>
          <h2 className="title edit">Infomações pessoais</h2>
          <Input
            labelFor="Name"
            placeholder="Name"
            size="small"
            fieldName="name"
            type="text"
          ></Input>
          <Input
            labelFor="Email"
            placeholder="Email"
            size="small"
            fieldName="email"
            type="text"
          ></Input>
          <Input
            labelFor="CPF"
            placeholder="900.880.090-00"
            size="small"
            fieldName="cpf"
            type="number"
          ></Input>
          <Input
            labelFor="Celular"
            placeholder="(084) 90909-9092"
            size="small"
            fieldName="number"
            type="text"
          ></Input>
          <Input
            labelFor="Data de nascimento"
            placeholder="09/12/99"
            size="small"
            fieldName="birthdate"
            type="number"
          ></Input>
          <Input
            labelFor="Descrição"
            placeholder="Escreva aqui sua descrição"
            size="big"
            fieldName="description"
            type="textarea"
          ></Input>
          <div className="edit select">
            <Button
              className="select right"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left save">Salvar alterações</Button>
          </div>
        </>
      );
    case "Excluir anúncio":
      return (
        <>
          <h2 className="title excluir ">
            Tem certeza que deseja remover este anúncio?
          </h2>
          <span className="subtitle excluir">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </span>
          <div className="delete right">
            <Button
              className="select cancel"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left">Sim, excluir anúncio</Button>
          </div>
        </>
      );
  }
};

export default ModalRequest;
