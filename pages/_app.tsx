import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/8e5bc578dd.js"
        crossOrigin="anonymous"
      ></Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3L2HK0HKV4"
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3L2HK0HKV4');
        `}
      </Script>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
