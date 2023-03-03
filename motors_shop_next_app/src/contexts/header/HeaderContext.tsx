import { IProps } from "@/interfaces/generaInterfaces";
import { IHeader } from "@/interfaces/header";
import { createContext, useState } from "react";

export const HeaderContext = createContext<IHeader>({} as IHeader);
const HeaderContextProvider = ({ children }: IProps) => {
  const [isLoged, setIsLoged] = useState(false);
  const [isNavMobile, setIsNavMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function verifyIsLogged(token:any){
    if(token){
      setIsLoged(true)
    }
    else{setIsLoged(false)} 
  }
  
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function toggleMobile() {
    isNavMobile ? 
        setIsNavMobile(false)
        :
        setIsNavMobile(true)
    return
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
        setIsLoged,
        toggleMobile,
        toggleDeskTop,
        setIsModalOpen,
        verifyIsLogged,
        handleOpenModal,
        handleCloseModal,
        isModalOpen,
        isNavMobile,
        isLoged
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;