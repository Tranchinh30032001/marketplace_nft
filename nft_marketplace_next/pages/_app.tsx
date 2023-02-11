import { Footer, Navbar } from "@/components/rootindex";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MarketProvider, { MarketContext } from "@/context/MarketProvider";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MarketProvider>
        <Navbar />
        <div className="mt-[70px]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </MarketProvider>
    </>
  );
}
