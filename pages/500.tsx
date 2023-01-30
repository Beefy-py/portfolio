import React, { useEffect } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { bubbles500 } from "../utils/resources";

function Custom500() {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      y: [0, -15, 0],
    },
  };

  const getBlockColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-logo-shade1";
      case "light-green":
        return "bg-logo-shade3";
      case "dark":
        return "bg-black/20 dark:bg-white";
      default:
        break;
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen bg-no-repeat bg-center overflow-hidden relative">
      <motion.section className="overflow-hidden bg-center bg-no-repeat w-full">
        {" "}
        <motion.div
          className="static"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {bubbles500.desktop.map((bubble, index) => (
            <motion.div
              variants={item}
              animate={{ scale: 1, y: [0, -15, 0] }}
              whileHover={{
                scale: [null, 1.2, 1.1],
                y: [0, -15, 0],
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                y: {
                  repeat: Infinity,
                  type: "spring",
                  duration: 3,
                  delay: Math.random() * 2.5,
                },
              }}
              key={index}
              className={`scale-50 md:scale-100 lg:scale-110 xl:scale-125 hidden lg:block blur-lg -inset-3 ${getBlockColor(
                bubble.color
              )}`}
              style={{
                height: bubble.height,
                width: bubble.width,
                borderRadius: "5%",
                zIndex: -1,
                position: "absolute",
                left: bubble.xAxisPosition,
                top: bubble.yAxisPosition - 80,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                transform: `rotate(${bubble.rotation ?? 0}deg)`,
              }}
            ></motion.div>
          ))}{" "}
          {bubbles500.mobile.map((bubble, index) => (
            <motion.div
              variants={item}
              animate={{ scale: 1, y: [0, -15, 0] }}
              whileHover={{
                scale: [null, 1.2, 1.1],
                y: [0, -10, 0],
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                y: {
                  repeat: Infinity,
                  type: "spring",
                  duration: 3,
                  delay: Math.random() * 2.5,
                },
              }}
              key={index}
              className={`scale-50 md:scale-100 lg:scale-110 xl:scale-125 block lg:hidden blur-md -inset-3 ${getBlockColor(
                bubble.color
              )}`}
              style={{
                height: bubble.height,
                width: bubble.width,
                borderRadius: "5%",
                zIndex: -1,
                position: "absolute",
                left: bubble.xAxisPosition,
                top: bubble.yAxisPosition - 80,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                transform: `rotate(${bubble.rotation ?? 0}deg)`,
              }}
            ></motion.div>
          ))}
        </motion.div>
      </motion.section>
      <div className="py-8 px-4 my-32 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h1 className="mb-4 text-7xl tracking-tight lg:text-9xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 dark:from-gray-200 to-logo-shade2">
            500
          </h1>
          <p className="mb-4 text-gray-800 dark:text-gray-200 text-3xl tracking-tight font-bold md:text-4xl">
            Internal Server Error.
          </p>
          {/* <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Sorry, I can&apos;t find that page. You&apos;ll find lots more to
            explore about me on the homepage.{" "}
          </p>

          <Link
            href="/"
            className="transition ease justify-center bg-logo-shade4 text-xs lg:text-sm xl:text-base my-1 py-2.5 px-5 rounded-sm  font-bold drop-shadow-sm hover:drop-shadow-xl text-gray-800 hover:bg-logo-shade5 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-logo-shade5 text-center"
          >
            Back to Homepage
          </Link> */}
        </div>
      </div>{" "}
    </section>
  );
}

export default Custom500;
