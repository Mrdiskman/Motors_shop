import React, { useContext, useState } from "react";
import { EditProfileForm, ModalContainer } from "./ModalContainer.style";
import { IoMdClose } from "react-icons/io";
import { HeaderContext } from "@/contexts/header/HeaderContext";
const ModalEditProfile = () => {
  const { handleCloseModal } = useContext(HeaderContext);

  return (
    <>
      <ModalContainer>
        <div className="modal-box">
          <div className="modal-box-header">
            <h1>Editar perfil</h1>
            <button
              className="btn-close-modal"
              onClick={() => handleCloseModal()}
            >
              <IoMdClose />
            </button>
          </div>
          <h2>Informações pessoais</h2>
          <EditProfileForm>
            <label>Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ex: Samuel Leao"
            ></input>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Ex: samuel@kenzie.com.br"
            ></input>
            <label>CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              placeholder="000.000.000-00"
            ></input>
            <label>Celular</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="(DDD) 90000-0000"
            ></input>
            <label>Data de nascimento</label>
            <input
              type="text"
              id="birthday"
              name="birthday"
              required
              placeholder="00/00/00"
            ></input>
            <label>Descrição</label>

            <textarea
              id="description"
              name="description"
              required
              placeholder="Digitar descricao"
            ></textarea>

            <div className="btns-div">
              <button className="btn-cancel" onClick={() => handleCloseModal()}>
                Cancelar
              </button>
              <button className="btn-submit">Salvar alterações</button>
            </div>
          </EditProfileForm>
        </div>
      </ModalContainer>
    </>
  );
};

export default ModalEditProfile;
