import moment from "moment";
import React from "react";
import { motion } from "framer-motion";
import { workedAt } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { fadeIn, fadeInViewport } from "../utils/motion";

function ExperienceSection() {
  const newestFirst = [...workedAt].reverse();

  return (
    <SectionWrapper
      name="experience"
      index="02"
      label="Experience"
      title={
        <>
          Where I&apos;ve been <span className="text-muted">building.</span>
        </>
      }
    >
      <ol className="border-t hairline">
        {newestFirst.map((exp, index) => (
          <motion.li
            key={exp.company}
            initial="hidden"
            whileInView="show"
            viewport={fadeInViewport}
            variants={fadeIn("up", index * 60)}
            className="group relative grid gap-4 border-b hairline py-10 transition-colors lg:grid-cols-4 lg:gap-8 lg:py-12"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-5 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100 sm:-left-8 lg:-left-12"
            />
            <p className="label flex items-center gap-2 self-start lg:pt-3">
              {!exp.to && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              {moment(exp.from).format("MMM YYYY")} —{" "}
              {exp.to ? moment(exp.to).format("MMM YYYY") : "Now"}
            </p>
            <div>
              <h3 className="text-3xl font-semibold leading-none tracking-[-0.03em] transition-colors group-hover:text-accent lg:text-4xl">
                {exp.company}
              </h3>
              <p className="mt-3 text-muted">{exp.role}</p>
            </div>
            <p className="leading-relaxed text-muted lg:col-span-2">
              {exp.description.trim()}
            </p>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  );
}

export default ExperienceSection;
