import Link from "next/link";
import { INavbar } from ".";
import { DropDownMenu, StyledDesktopNav, StyledNav } from "./style";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../assets/logo.svg";
import UserIcon from "../UserIcon";
import Button from "../Button";
import { useEffect } from "react";

const DesktopNavbar = ({ isAuthenticated }: INavbar) => {
  return (
    <StyledNav>
      <StyledDesktopNav>
        <Link href="#landing_section">
          <Image alt="brand logo" src={Logo} />
        </Link>
        <div className="navbar">
          <div className="pages">
            <Link href="#carros_section">Carros</Link>
            <Link href="#motos_section">Motos</Link>
            <Link href="#leilao_section">Leilão</Link>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <DropDownMenu>
                <UserIcon isNav />
              </DropDownMenu>
            </div>
          ) : (
            <div className="login-signin">
              <Link href="/login">Fazer login</Link>
              <Link href="/sign-in">
                <Button colorStyle="grey-4__grey-0">Cadastrar</Button>
              </Link>
            </div>
          )}
        </div>
      </StyledDesktopNav>
    </StyledNav>
  );
};

export default DesktopNavbar;
