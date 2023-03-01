import { createContext, ReactNode, useState } from "react";

interface IProps {
  children?: ReactNode;
}

export interface IHeader {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobile: () => void;
  toggleDeskTop: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
  navDesktop: boolean;
  navMobile: boolean;
}
export const HeaderContext = createContext<IHeader>({} as IHeader);

const HeaderContextProvider = ({ children }: IProps) => {
  const [navMobile, setNavMobile] = useState(false);
  const [navDesktop, setNavDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  function handleOpenModal() {
    setIsModalOpen(true);
  }
  
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function toggleMobile() {
    if (navMobile) {
      return setNavMobile(false);
    }
    setNavMobile(true);
  }

  function toggleDeskTop() {
    if (navDesktop) {
      return setNavDesktop(false);
    }
    setNavDesktop(true);
  }

  return (
    <HeaderContext.Provider
      value={{
        toggleMobile,
        toggleDeskTop,
        setIsModalOpen,
        handleOpenModal,
        handleCloseModal,
        isModalOpen,
        navDesktop,
        navMobile,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;