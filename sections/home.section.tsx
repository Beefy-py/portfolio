import Image from "next/image";
import React from "react";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SectionWrapper from "./sectionWrapper";
import { motion } from "framer-motion";
import { bubbles } from "../utils/resources";

function HomeSection() {
  const ctaLinks = {
    contact: [
      "w-full",
      "transition",
      "inline-flex justify-center items-center",
      "px-5 py-3",
      "mr-3",
      "font-medium text-base text-center text-gray-900 dark:text-white hover:text-logo-shade1 dark:hover:text-logo-shade1",
      "outline-none outline-offset-4 focus:outline-2 focus:text-logo-shade1 dark:focus:text-logo-shade1 focus:outline-logo-shade1 dark:focus:outline-logo-shade1",
      "bg-gray-300 dark:bg-gray-700",
      "rounded-sm",
    ].join(" "),
    download: [
      "w-full",
      "transition duration-400",
      "inline-flex justify-center items-center",
      "px-5 py-3",
      "mr-3",
      "font-medium text-base text-center text-gray-900 dark:text-white",
      "outline-none outline-offset-4 focus:outline-2 focus:border-transparent focus:outline-logo-shade4 focus:bg-logo-shade4",
      "bg-none hover:bg-logo-shade4",
      "border border-gray-700",
      "rounded-sm",
    ].join(" "),
  };

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
    <SectionWrapper name="">
      <motion.section className="overflow-hidden bg-center bg-no-repeat w-full">
        {" "}
        <motion.div
          className="static"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {bubbles.desktop.map((bubble, index) => (
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
              className={`scale-50 md:scale-100 lg:scale-110 xl:scale-125 hidden lg:block blur-md -inset-3 ${getBlockColor(
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
          {bubbles.mobile.map((bubble, index) => (
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

      <div className="mx-auto place-self-center col-span-full">
        <h1
          data-aos="fade-down"
          className="max-w-2xl mb-4 text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700 dark:text-white"
        >
          Hi,
          <br /> My name is <span className="text-logo-shade1">Kenny Hoft</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          I'm a software developer working with start-up companies in Suriname
          to help maintain their technologies and build for clients.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="my-3 flex justify-between mx-auto sm:w-3/4"
        >
          <a href="mailto:hoftkenny@gmail.com" className={ctaLinks.contact}>
            <span> Contact Me</span>
            <EnvelopeIcon className="ml-3 h-6 w-6" />
          </a>
          <a
            href="https://docs.google.com/document/d/1An3XWI8L4WoQutpyC_stT0CTcGi7bv1UWotVukVL3cI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaLinks.download}
          >
            <span> Download CV</span>
            <ArrowDownOnSquareStackIcon className="ml-3 h-6 w-6" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HomeSection;
