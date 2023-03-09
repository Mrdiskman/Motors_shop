import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import ModalEditProfile from "../ModalComponent/modalComponent";
import { useRouter } from "next/router";
import { NavBar } from "./styled";

function OptionsMenu() {
  const { handleOpenModal, isModalOpen } = useContext(HeaderContext);
  const router = useRouter();
  const logOut = () => {
    window.localStorage.removeItem("@TOKEN");
    router.reload();
  };
  return (
    <>
      {isModalOpen == true ? (
        <NavBar>
          <ul className="listContainerMobile">
            <li className="listMobile">Carros</li>
            <li className="listMobile">Motos</li>
            <li className="listMobile">Leilao</li>
          </ul>
          <div className="conteinerOptionsMobile ">
            <button className="option" onClick={() => handleOpenModal()}>
              Editar Perfil
            </button>
            <ModalEditProfile />
            <button className="option">Editar endereço</button>
            <button className="option">Meus Anúncios</button>
            <button onClick={() => logOut()} className="option">
              Sair
            </button>
          </div>
        </NavBar>
      ) : (
        <NavBar>
          <ul className="listContainerMobile">
            <li className="listMobile">Carros</li>
            <li className="listMobile">Motos</li>
            <li className="listMobile">Leilao</li>
          </ul>
          <div className="conteinerOptionsMobile ">
            <button className="option" onClick={() => handleOpenModal()}>
              Editar Perfil
            </button>
            <button className="option">Editar endereço</button>
            <button className="option">Meus Anúncios</button>
            <button onClick={() => {}} className="option">
              Sair
            </button>
          </div>
        </NavBar>
      )}
    </>
  );
}
export default OptionsMenu;
