import type { AppProps } from "next/app";

import Provider from "@/contexts";
import GlobalStyles from "styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
