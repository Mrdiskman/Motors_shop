
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import { IProps } from "@/interfaces/generaInterfaces";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";

export const Layout = ({ children, ...props }: IProps) => {
  return (
    <>
      <HeaderContextProvider>
        <Header />
        <main {...props}>{children}</main>
        <Footer />
      </HeaderContextProvider>
    </>
  );
};