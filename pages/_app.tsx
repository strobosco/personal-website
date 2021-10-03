import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { StylesProvider } from "@material-ui/core/styles";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
export default MyApp;
