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