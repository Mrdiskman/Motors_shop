import { IProps } from "@/interfaces/generaInterfaces";
import { IHeader } from "@/interfaces/header";
import { createContext, useState } from "react";

export const HeaderContext = createContext<IHeader>({} as IHeader);
const HeaderContextProvider = ({ children }: IProps) => {
  const [isLoged, setIsLoged] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const [navDesktop, setNavDesktop] = useState(false);
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
    if (navMobile) {
        setNavDesktop(true);
        setNavMobile(false);
        return 
    }
    setNavMobile(true);
    setNavDesktop(false);
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
        navDesktop,
        navMobile,
        isLoged
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;