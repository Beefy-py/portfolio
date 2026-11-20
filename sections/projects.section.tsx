import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projects } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { fadeIn, fadeInViewport } from "../utils/motion";

function ProjectsSection() {
  return (
    <SectionWrapper
      name="projects"
      index="03"
      label="Selected work"
      title={
        <>
          Things I&apos;ve built <span className="text-muted">& shipped.</span>
        </>
      }
    >
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => {
          const hasLink = project.url && project.url !== "#";
          return (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="show"
              viewport={fadeInViewport}
              variants={fadeIn("up")}
              className={`group ${index % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] bg-surface">
                <Image
                  alt={`Screenshot of ${project.name}`}
                  width={1200}
                  height={900}
                  src={project.image}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#ede8dd] backdrop-blur-md">
                  P—0{index + 1}
                </span>
                {hasLink && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="absolute bottom-4 right-4 grid h-14 w-14 translate-y-2 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                  >
                    <ArrowUpRightIcon className="h-6 w-6" strokeWidth={2} />
                  </a>
                )}
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">{project.name}</h3>
                {hasLink ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-2 shrink-0 hover:text-accent"
                  >
                    Visit ↗
                  </a>
                ) : (
                  <span className="label mt-2 shrink-0">Private build</span>
                )}
              </div>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <li
                    key={tag.name}
                    className="rounded-full border hairline px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label link-underline mt-4 hover:text-accent"
                >
                  Source on GitHub ↗
                </a>
              )}
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
