import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import ModalEditProfile from "../Header/EditProfileModal";
import { NavBar } from "./styled";

function OptionsMenu() {
  const { handleOpenModal } = useContext(HeaderContext);

  return (
    <NavBar>
      <ul className="listContainerMobile">
        <li className="listMobile">Carros</li>
        <li className="listMobile">Motos</li>
        <li className="listMobile">Leilao</li>
      </ul>
      <div className="conteinerOptionsMobile ">
        <button className="option" onClick={handleOpenModal}>
          Editar Perfil
        </button>
        <ModalEditProfile/>
        <button className="option">Editar endereço</button>
        <button className="option">Meus Anúncios</button>
        <button onClick={() => {}} className="option">
          Sair
        </button>
      </div>
    </NavBar>
  );
}
export default OptionsMenu;
