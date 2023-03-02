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
  const { toggleMobile, navDesktop, navMobile, isLoged } =
    useContext(HeaderContext);
  return (
    <>
    {isLoged == false?
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
        <NotLogged />

        <button onClick={() => toggleMobile()} className="btnMobile">
          <GiHamburgerMenu className="menuMobileStyle" />
        </button>
      </HeaderStyle>
    :(
        <HeaderStyle>
          <Link href={"/home"}>
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
          <UserData />
          <button onClick={() => toggleMobile()} className="btnMobile">
            <GiHamburgerMenu className="menuMobileStyle" />
          </button>
        </HeaderStyle>
      )}
      {navDesktop && <MenuOptions />}
      {navMobile && <OptionsMenu />}
    </>
  );
}

export default Header;