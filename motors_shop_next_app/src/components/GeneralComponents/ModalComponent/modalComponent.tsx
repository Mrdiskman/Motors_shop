import React, { useContext } from "react";
import { EditProfileForm, ModalContainer } from "./ModalContainer.style";
import { IoMdClose } from "react-icons/io";
import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";

interface FormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  descripition: string;
}

const ModalEditProfile = () => {
  const { handleCloseModal } = useContext(HeaderContext);
  const { handleSubmit, register } = useForm<FormData>();

  const editProfile = async (formData: FormData) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    try {
      await api.patch("/users/update", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.href = "http://localhost:3000/";
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProfile = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    try {
      await api.delete("/users/delete", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("@TOKEN");
      window.location.href = "http://localhost:3000/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalContainer>
      <div className="modal-box">
        <div className="modal-box-header">
          <h1>Editar perfil</h1>
          <button className="btn-close-modal" onClick={handleCloseModal}>
            <IoMdClose />
          </button>
        </div>
        <h2>Informações pessoais</h2>
        <EditProfileForm onSubmit={handleSubmit(editProfile)}>
          <label>Nome</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Ex: Samuel Leao"
            {...register("name")}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          <label>CPF</label>
          <input
            type="text"
            id="cpf"
            required
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <label>Celular</label>
          <input
            type="text"
            id="phone"
            required
            placeholder="(DDD) 90000-0000"
            {...register("phone")}
          />
          <label>Data de nascimento</label>
          <input
            type="text"
            id="dateOfBirth"
            required
            placeholder="00/00/00"
            {...register("dateOfBirth")}
          />
          <label>Descrição</label>
          <textarea
            id="descripition"
            required
            placeholder="Digitar descricao"
            {...register("descripition")}
          ></textarea>
          <div className="btns-div">
            <button className="btn-cancel" onClick={handleCloseModal}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Salvar alterações
            </button>
            <button type="button" className="btn-delete-profile" onClick={deleteProfile}>
              Excluir minha conta
            </button>
          </div>
        </EditProfileForm>
      </div>
    </ModalContainer>
  );
};

export default ModalEditProfile;
