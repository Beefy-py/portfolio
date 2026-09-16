import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { aboutSkills, languageSkills } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { fadeIn, fadeInViewport } from "../utils/motion";

function AboutSection() {
  const interestsClassNames =
    "bg-gray-200 dark:text-logo-shade1 text-logo-shade2 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-800 my-1";
  return (
    <SectionWrapper name="about">
      <div className="place-self-center lg:col-span-7 text-md lg:text-lg text-gray-800 dark:text-gray-300">
        <motion.p
          initial={false}
          animate="show"
          variants={fadeIn("right")}
          className="mb-3"
        >
          I&apos;m a full-stack software developer with over four years of
          experience in Suriname&apos;s tech industry. I currently work as a
          Lead Software Developer (SAP & React) at Big Will Group, where I
          build web and mobile applications, design SAP solutions, and lead a
          small development team across several projects.
        </motion.p>
        <motion.p
          initial={false}
          animate="show"
          variants={fadeIn("right")}
          className="mb-3"
        >
          Over the years I&apos;ve worked across full-stack web apps, mobile
          apps with React Native, dashboards backed by Go and SAP/ERPNext, and
          AI-driven tooling. I hold React and Python certifications from
          HackerRank and completed CodeWithMosh&apos;s JavaScript Mastery
          series, and I&apos;m currently studying at Poly Technic College in
          Paramaribo.
        </motion.p>
        <motion.p
          initial={false}
          animate="show"
          variants={fadeIn("right")}
          className="mb-3"
        >
          I have a strong interest in mathematics and data science and am
          always looking for opportunities to keep learning and stay ahead of
          emerging technologies. I bring a serious, professional approach to
          my work and aim to consistently deliver high-quality results.
        </motion.p>
        <motion.p
          initial={false}
          animate="show"
          variants={fadeIn("right")}
          className=""
        >
          I&apos;m always open to new opportunities to learn and grow as a
          developer, and confident that my skills and enthusiasm let me make a
          positive impact on any project I&apos;m part of.
        </motion.p>
      </div>

      <motion.div
        initial={false}
        animate="show"
        variants={fadeIn("right", 400)}
        className="flex relative mt-3 lg:mt-0 lg:col-span-5 justify-end align-middle items-center"
      >
        <Image
          src="/me.jpg"
          alt="Image of Kenny Hoft on his portfolio website z-1"
          className="rounded-md"
          width={400}
          height={400}
        />
        {/* <div className="rounded-md absolute left-0 right-0 bottom-0 top-0 backdrop-blur-md z-2"></div> */}
        {/* <div className="bg-logo-shade3 w-48 h-48 rounded-full absolute -z-10 -right-12 -bottom-16 blur-lg brightness-110 contrast-125"></div>{" "}
        <div className="bg-logo-shade3 w-20 h-20 rounded-full absolute -z-10 -left-12 -top-16 blur-lg brightness-110 contrast-125"></div> */}
      </motion.div>

      <div className="col-span-full border-t-2 border-gray-200 dark:border-gray-800 mt-4 pt-2 flex flex-row flex-wrap">
        {" "}
        {aboutSkills.map((skill, index) => (
          <motion.span
            key={index + skill}
            initial="hidden"
            whileInView="show"
            viewport={fadeInViewport}
            variants={fadeIn("left", index * 100)}
            className={interestsClassNames}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <div className="col-span-full flex flex-row flex-wrap items-center">
        <span className="text-gray-500 dark:text-gray-500 text-sm font-medium mr-2 my-1">
          Languages:
        </span>
        {languageSkills.map((language, index) => (
          <motion.span
            key={index + language}
            initial="hidden"
            whileInView="show"
            viewport={fadeInViewport}
            variants={fadeIn("left", index * 100)}
            className={interestsClassNames}
          >
            {language}
          </motion.span>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
