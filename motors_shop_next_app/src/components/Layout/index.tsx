
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import { ReactNode } from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
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