import "../styles/globals.css";
import Layout from "../comps/Layout";
import type { AppProps } from "next/app";
import { ChakraProvider, layout } from "@chakra-ui/react";
import { Children } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
