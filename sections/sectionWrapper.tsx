import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInViewport } from "../utils/motion";

const SectionWrapper = ({
  name,
  index,
  label,
  title,
  children,
}: {
  name: string;
  index: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <section id={name} className="relative scroll-mt-16 py-20 lg:py-28">
      <div className="container-site">
        <div className="mb-14 grid gap-6 border-t hairline pt-6 lg:mb-20 lg:grid-cols-4">
          <p className="label flex gap-3">
            <span className="text-accent">({index})</span>
            {label}
          </p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={fadeInViewport}
            variants={fadeIn("up")}
            className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:col-span-3 lg:text-7xl"
          >
            {title}
          </motion.h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
