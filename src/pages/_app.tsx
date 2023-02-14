import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
