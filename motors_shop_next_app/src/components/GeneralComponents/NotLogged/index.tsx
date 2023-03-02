import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import { NotLoggedStyled } from "./styled";

function NotLogged() {
  const { setIsLoged } = useContext(HeaderContext);
  return (
    <>
      <NotLoggedStyled>
        <button className="actionButton" onClick={() => setIsLoged(true)}>
          Fazer Login
        </button>
        <button className="actionButton">Cadastrar</button>
      </NotLoggedStyled>
    </>
  );
}

export default NotLogged;
