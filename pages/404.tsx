import React from "react";
// import { blurryBlobs404 } from "../resources";
// import { motion } from "framer-motion";
import Link from "next/link";

function Custom404() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      y: [0, -60, 0],
    },
  };

  return (
    <section className="bg-transparent h-screen bg-no-repeat bg-center overflow-hidden relative">
      <div className="py-8 px-4 my-32 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h1 className="mb-4 text-7xl tracking-tight lg:text-9xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-logo-shade1 to-logo-shade2">
            404
          </h1>
          <p className="mb-4 text-gray-800 dark:text-gray-200 text-3xl tracking-tight font-bold md:text-4xl">
            Page Not Found.
          </p>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Sorry, I can&apos;t find that page. You&apos;ll find lots more to
            explore about me on the homepage.{" "}
          </p>

          <Link
            href="/"
            className="transition ease justify-center bg-logo-shade4 text-xs lg:text-sm xl:text-base my-1 py-2.5 px-5 rounded-sm  font-bold drop-shadow-sm hover:drop-shadow-xl text-gray-800 hover:bg-logo-shade5 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-logo-shade5 text-center"
          >
            Back to Homepage
          </Link>
        </div>
      </div>{" "}
      {/* <motion.div
        className="static"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blurryBlobs404.desktop.map((bubble, index) => (
          <motion.div
            variants={item}
            transition={{
              y: {
                repeat: Infinity,
                type: "spring",
                duration: 3,
                delay: Math.random() * 2.5,
              },
            }}
            key={index}
            className={`scale-50 lg:scale-110 xl:scale-125 hidden lg:block ${
              bubble.color === "green"
                ? "primary-gradient"
                : "secondary-gradient"
            }`}
            style={{
              height: bubble.height,
              width: bubble.width,
              backgroundColor: bubble.color,
              borderRadius: "100%",
              position: "absolute",
              zIndex: -1,
              left: bubble.xAxisPosition,
              top: bubble.yAxisPosition - 80,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              transform: `rotate(${bubble.rotation ?? 0}deg)`,
            }}
          ></motion.div>
        ))}{" "}
        {blurryBlobs404Mobile.mobile.map((bubble, index) => (
          <motion.div
            variants={item}
            transition={{
              y: {
                repeat: Infinity,
                type: "spring",
                duration: 3,
                delay: Math.random() * 2.5,
              },
            }}
            key={index}
            className={`scale-50 lg:hidden ${
              bubble.color === "green"
                ? "primary-gradient"
                : "secondary-gradient"
            }`}
            style={{
              height: bubble.height,
              width: bubble.width,
              backgroundColor: bubble.color,
              borderRadius: "100%",
              position: "absolute",
              zIndex: -1,
              left: bubble.xAxisPosition,
              top: bubble.yAxisPosition - 80,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              transform: `rotate(${bubble.rotation ?? 0}deg)`,
            }}
          ></motion.div>
        ))}
      </motion.div> */}
    </section>
  );
}

export default Custom404;
