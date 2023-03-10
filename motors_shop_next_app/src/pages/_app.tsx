import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import AnnounceContextProvider from "@/contexts/announce/announceContext";
import ModalProvider from "@/contexts/Modal/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderContextProvider>
      <ModalProvider>
        <AnnounceContextProvider>
          <Component {...pageProps} />
        </AnnounceContextProvider>
      </ModalProvider>
    </HeaderContextProvider>
  );
}
