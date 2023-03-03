import { HeaderStyle } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import UserData from "../UserData/index";
import React, { useContext } from "react";
import Link from "next/link";
import { HeaderContext } from "@/contexts/header/HeaderContext";
import MenuOptions from "../OptionsDesktop";
import OptionsMenu from "../OptionsMobile";
import NotLogged from "../NotLogged";

function Header() {

  const { toggleMobile, isNavMobile, isLoged } =
    useContext(HeaderContext);


  return (
    <>
      <HeaderStyle>
        <Link href={"/"}>
          <h1 className="title">
            Motors <span className="titleStyle">shop</span>
          </h1>
        </Link>

        <nav className="navBar">
          <ul className="containerList">
            <li>Carros</li>
            <li>Motos</li>
            <li>Leilao</li>
          </ul>
        </nav>

        {isLoged ?
        <UserData />
          :
        <NotLogged />
        }

        <button onClick={() => toggleMobile()} className="btnMobile">
          <GiHamburgerMenu className="menuMobileStyle" />
        </button>

      </HeaderStyle>

      { !isNavMobile && <MenuOptions /> }
      { isNavMobile && <OptionsMenu /> }
    </>
  );
}

export default Header;
