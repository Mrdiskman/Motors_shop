import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import { NotLoggedStyled } from "./styled";

function NotLogged() {
  const { setIsLoged } = useContext(HeaderContext);
  return (
    <>
      <NotLoggedStyled>
        <button className="actionButton" onClick={()=>window.location.href = "http://localhost:3000/login"}>
          Fazer Login
        </button>
        <button className="actionButton" onClick={()=>window.location.href = "http://localhost:3000/register"}>Cadastrar</button>
      </NotLoggedStyled>
    </>
  );
}

export default NotLogged;
