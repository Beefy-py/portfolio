import Image from "next/image";
import React from "react";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SectionWrapper from "./sectionWrapper";

function HomeSection() {
  const ctaLinks = {
    contact: [
      "w-full",
      "transition",
      "inline-flex justify-center items-center",
      "px-5 py-3",
      "mr-3",
      "font-medium text-base text-center text-gray-900 dark:text-white hover:text-logo-shade2 dark:hover:text-logo-shade4",
      "outline-none outline-offset-4 focus:outline-2 focus:text-logo-shade2 dark:focus:text-logo-shade4 focus:outline-logo-shade2 dark:focus:outline-logo-shade4",
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
  return (
    <SectionWrapper name="">
      {" "}
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1
          data-aos="fade-right"
          className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700 dark:text-white"
        >
          Hi,
          <br /> My name is <span className="text-logo-shade1">Kenny Hoft</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          I'm a software developer working with start-up companies in Suriname
          to help maintain their technologies and build for clients.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="my-3 flex justify-between sm:w-3/4"
        >
          <a href="#" className={ctaLinks.contact}>
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
