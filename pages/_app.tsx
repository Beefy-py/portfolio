import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import React from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";

NProgress.configure({ easing: "ease", speed: 500 });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

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
