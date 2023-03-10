import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import ModalEditProfile from "../ModalComponent/modalComponent";
import { MenuOptionsStyled } from "./styled";

const MenuOptions = () => {
  const { handleOpenModal, isModalOpen } = useContext(HeaderContext);
  const router = useRouter();
  const logOut = () => {
    window.localStorage.removeItem("@TOKEN");
    router.reload();
  };

  return (
    <>
      {isModalOpen == true ? (
        <MenuOptionsStyled>
          <div className="conteinerOptions">
            <button className="option" onClick={handleOpenModal}>
              Editar Perfil
            </button>

            <button className="option">Editar endereço</button>
            <button
              className="option"
              onClick={() => router.push("/AnnouncerDashboard")}
            >
              Meus Anúncios
            </button>
            <button className="option + for" onClick={() => logOut()}>
              Sair
            </button>
          </div>
          <ModalEditProfile />
        </MenuOptionsStyled>
      ) : (
        <MenuOptionsStyled>
          <div className="conteinerOptions">
            <button className="option" onClick={handleOpenModal}>
              Editar Perfil
            </button>
            <button className="option">Editar endereço</button>
            <button
              className="option"
              onClick={() => router.push("/AnnouncerDashboard")}
            >
              Meus Anúncios
            </button>
            <button className="option + for" onClick={() => logOut()}>
              Sair
            </button>
          </div>
        </MenuOptionsStyled>
      )}
    </>
  );
};

export default MenuOptions;
