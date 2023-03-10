import Image from "next/image";

import Link from "next/link";
import Button from "../Button";
import UserIcon from "../UserIcon";
import MenuButton from "../MenuButton";
import Logo from "../../../assets/logo.svg";

import { INavbar } from ".";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DropDownMenu, StyledMobileNav, StyledNav } from "./style";

const MobileNavbar = ({ isAuthenticated }: INavbar) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const variants = {
    opened: {
      top: -10,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 1,
      },
    },
    closed: {
      top: "-90vh",
      transition: {
        duration: 1,
      },
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 15,
    },
    closed: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <StyledNav>
        <StyledMobileNav>
          <Link href="#landing_section">
            <Image alt="brand logo" src={Logo} />
          </Link>
          <div onClick={toggleMenu} className="mobile">
            <MenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              strokeWidth="5"
              color="var(--grey2)"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="20"
              height="20"
              cursor="pointer"
            />
          </div>
        </StyledMobileNav>
      </StyledNav>
      <DropDownMenu>
        <motion.ul
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={variants}
        >
          <Link href="#carros_section">
            <motion.li variants={linkVariants}>Carros</motion.li>
          </Link>
          <Link href="#motos_section">
            <motion.li variants={linkVariants}>Motos</motion.li>
          </Link>
          <Link href="#leilao_section">
            <motion.li variants={linkVariants}>Leilão</motion.li>
          </Link>
          {isAuthenticated ? (
            <UserIcon isNav />
          ) : (
            <div>
              <Link href="/login">
                <motion.li variants={linkVariants}>Fazer login</motion.li>
              </Link>
              <motion.li variants={linkVariants}>
                <Link href="/sign-in">
                  <Button width_mobile="90%" colorStyle="grey-4__grey-0">
                    Cadastrar
                  </Button>
                </Link>
              </motion.li>
            </div>
          )}
        </motion.ul>
      </DropDownMenu>
    </>
  );
};

export default MobileNavbar;
