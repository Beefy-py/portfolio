import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

import React from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

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
  return (
    <>
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

      <div className={`${display.variable} ${mono.variable} font-display`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;
