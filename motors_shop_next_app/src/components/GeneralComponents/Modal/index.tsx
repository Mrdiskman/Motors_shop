import { RiCloseLine } from "react-icons/Ri";
import Button from "../Button";
import { useContext } from "react";

import ModalRequest, { IProps } from "./modalRequest";
import { Container, OverWindow } from "./style";
import { ModalContext } from "@/contexts/Modal/ModalContext";

const Modal = ({ title }: IProps): JSX.Element => {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      {modal && (
        <OverWindow>
          <Container>
            <header className="modal header">
              <h3 className="modal title">{title}</h3>
              <Button className="modal close" onClick={() => setModal(false)}>
                <RiCloseLine className="modal icon-close" />
              </Button>
            </header>
            <ModalRequest title={title} />
          </Container>
        </OverWindow>
      )}
    </>
  );
};

export default Modal;
