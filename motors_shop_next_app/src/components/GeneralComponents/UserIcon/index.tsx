import { useContext, useState } from "react";

import { motion } from "framer-motion";
import { IUser } from "@/interfaces/IUser";
import { Icon, StyledUserIcon } from "./styles";
import { ModalContext } from "../../../contexts/Modal/ModalContext";

import Image from "next/image";
import getUserInitials from "utils/getUserInitials";
import transformUserName from "utils/transformUserName";

interface IUserIcon {
  user?: IUser;
  isNav?: boolean;
  auction?: boolean;
}

const UserIcon = ({ user, isNav, auction }: IUserIcon) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const { type, setModal, settype } = useContext(ModalContext);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const renderConditional = () => {
    if (user) {
      if (user.userImage) {
        return <Image alt="user image" src={user.userImage} />;
      } else {
        return <Icon onClick={toggleMenu}>{getUserInitials(user.name)}</Icon>;
      }
    } else {
      return (
        <Icon onClick={toggleMenu}>{getUserInitials("nome usuário")}</Icon>
      );
    }
  };
  return (
    <>
      <StyledUserIcon auction={auction}>
        {renderConditional()}
        <span onClick={toggleMenu}>
          {user
            ? transformUserName(user.name)
            : transformUserName("nome usuário")}
        </span>
      </StyledUserIcon>
      {isNav && (
        <motion.ul
          className="user-dropDown"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <li
            onClick={() => {
              setModal(true);
              settype("Editar perfil");
            }}
          >
            Editar perfil
          </li>
          <li>Editar endereço</li>
          <li>Minhas compras</li>
          <li>Sair</li>
        </motion.ul>
      )}
    </>
  );
};

export default UserIcon;
