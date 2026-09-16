import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { League_Spartan, Secular_One } from "next/font/google";

import React from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-league",
});

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-secular",
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

      <div className={`${leagueSpartan.variable} ${secularOne.variable} font-league`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;
