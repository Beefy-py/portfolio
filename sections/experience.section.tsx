import moment from "moment";
import React from "react";
import { motion } from "framer-motion";
import { workedAt } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { fadeIn, fadeInViewport } from "../utils/motion";

function ExperienceSection() {
  return (
    <SectionWrapper name="experience">
      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={fadeInViewport}
        variants={fadeIn("down")}
        className="lg:col-span-7 relative border-l border-logo-shade1"
      >
        {workedAt.map((exp, index) => (
          <li key={index + " " + exp.company} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 bg-logo-shade1"></div>
            <h3 className="text-xl font-semibold text-logo-shade1">
              {exp.company}
            </h3>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={fadeInViewport}
              variants={fadeIn("left")}
              className="text-gray-500 my-1 divide-x-2 divide-gray-400 dark:divide-gray-600"
            >
              <span className="font-semibold mr-1">{exp.role}</span>
              <span className="text-gray-600 pl-1">
                {moment(exp.from).format("MMMM YYYY")} -{" "}
                {exp.to ? moment(exp.to).format("MMMM YYYY") : "Current"}
              </span>
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={fadeInViewport}
              variants={fadeIn("left", 100)}
              className="text-lg font-normal text-gray-600 dark:text-gray-400"
            >
              {exp.description}
            </motion.p>
          </li>
        ))}
      </motion.ol>
    </SectionWrapper>
  );
}

export default ExperienceSection;
