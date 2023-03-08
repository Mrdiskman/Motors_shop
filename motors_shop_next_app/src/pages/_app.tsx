import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeaderContextProvider from "@/contexts/header/HeaderContext";
import AnnounceContextProvider from "@/contexts/announce/announceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderContextProvider>
      <AnnounceContextProvider>
        <Component {...pageProps} />
      </AnnounceContextProvider>
    </HeaderContextProvider>
  );
}
