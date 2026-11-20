import React from "react";
import { motion } from "framer-motion";
import { aboutSkills, languageSkills, stats } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { fadeIn, fadeInViewport } from "../utils/motion";

function AboutSection() {
  return (
    <SectionWrapper
      name="about"
      index="01"
      label="About"
      title={
        <>
          Four years of turning messy daily work into{" "}
          <span className="text-muted">simple software.</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-4">
        <div className="lg:col-start-2 lg:col-span-3">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-xl leading-relaxed sm:text-2xl md:col-span-2">
              I&apos;m a full-stack software developer from Suriname. Right now
              I&apos;m a Lead Software Developer (SAP & React) at Big Will
              Group, building web and mobile applications, designing SAP
              solutions, and leading a small development team across several
              projects.
            </p>
            <p className="leading-relaxed text-muted">
              Over the years I&apos;ve worked across full-stack web apps,
              mobile apps with React Native, dashboards backed by Go and
              SAP/ERPNext, and AI-driven tooling. I hold React and Python
              certifications from HackerRank, completed CodeWithMosh&apos;s
              JavaScript Mastery series, and I&apos;m studying at Poly Technic
              College in Paramaribo.
            </p>
            <p className="leading-relaxed text-muted">
              I have a strong interest in mathematics and data science, and
              I&apos;m always looking for the next thing to learn. I bring a
              serious, professional approach to my work and aim to deliver
              high-quality results on every project I&apos;m part of.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-t hairline md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="show"
                viewport={fadeInViewport}
                variants={fadeIn("up", index * 80)}
                className="border-b hairline py-8 pr-4 md:border-b-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-6xl font-semibold tracking-[-0.05em] lg:text-7xl">
                  {stat.value}
                </dd>
                <dd className="label mt-3">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-12 grid gap-8 border-t hairline pt-8 md:grid-cols-4">
            <p className="label">Toolbox</p>
            <ul className="flex flex-wrap gap-2 md:col-span-3">
              {aboutSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border hairline px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <p className="label">Languages</p>
            <ul className="flex flex-wrap gap-2 md:col-span-3">
              {languageSkills.map((language) => (
                <li key={language} className="rounded-full bg-surface px-4 py-1.5 text-sm">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
