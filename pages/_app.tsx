import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
