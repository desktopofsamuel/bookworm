import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import customTheme from "../theme.js";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
