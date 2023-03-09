import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import { NotLoggedStyled } from "./styled";
import { useRouter } from 'next/router';

function NotLogged() {
  const router = useRouter();
  const { setIsLoged } = useContext(HeaderContext);
  return (
    <>
      <NotLoggedStyled>
        <button className="actionButton" onClick={()=>router.push("/login")}>
          Fazer Login
        </button>
        <button className="actionButton" onClick={()=>router.push("/register")}>Cadastrar</button>
      </NotLoggedStyled>
    </>
  );
}

export default NotLogged;
