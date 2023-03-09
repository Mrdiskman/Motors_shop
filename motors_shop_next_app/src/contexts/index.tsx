import { ContextsProps } from "../interfaces/ContextsProps";
import AnnounceContextProvider from "./announce/announceContext";
import HeaderContextProvider from "./header/HeaderContext";
import ModalProvider from "./Modal/ModalContext";
import UserProvider from "./user/UserContext";

const Provider = ({ children }: ContextsProps) => (
  <UserProvider>
    <ModalProvider>
      <HeaderContextProvider>
        <AnnounceContextProvider>{children}</AnnounceContextProvider>
      </HeaderContextProvider>
    </ModalProvider>
  </UserProvider>
);
export default Provider;
