export interface IHeader {
  setIsLoged: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobile: () => void;
  toggleDeskTop: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
  navDesktop: boolean;
  isNavMobile: boolean;
  isLoged:boolean
}