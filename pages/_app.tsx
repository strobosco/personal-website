import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { StylesProvider } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({});

  return (
    <StylesProvider injectFirst={true} disableGeneration={true}>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
export default MyApp;
