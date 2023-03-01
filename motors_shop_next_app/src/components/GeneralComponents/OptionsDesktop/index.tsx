import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import ModalEditProfile from "../Header/EditProfileModal";
import { MenuOptionsStyled } from "./styled";

const MenuOptions = () => {
  const {
    handleOpenModal,
  } = useContext(HeaderContext);

  return (
    <MenuOptionsStyled>
      <div className="conteinerOptions">
        <button className="option" onClick={handleOpenModal}>
          Editar Perfil
        </button>
        <ModalEditProfile/>
        <button className="option">Editar endereço</button>
        <button className="option">Meus Anúncios</button>
        <button className="option + for onClick={logOut}">Sair</button>
      </div>
    </MenuOptionsStyled>
  );
};

export default MenuOptions;