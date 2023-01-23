import Image from "next/image";
import React from "react";
import { projects } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function ProjectsSection() {
  return (
    <SectionWrapper name="projects">
      <div className="col-span-full flex items-center flex-col md:flex-row md:justify-start w-full">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="border-2 border-gray-300 dark:border-gray-800 rounded-sm max-w-xs sm:max-w-sm mt-4 md:mt-0 md:ml-2"
          >
            <Image
              alt={project.description}
              width={400}
              height={300}
              src={project.image}
              className="rounded-t-sm"
            />
            <div className="my-2 px-4">
              <h3 className="text-gray-700 dark:text-gray-200 text-lg font-semibold inline-flex items-center">
                {project.name}
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-logo-shade3 transition"
                >
                  <ArrowTopRightOnSquareIcon className="ml-3 h-6 w-6" />
                </a>
              </h3>
              <p className="mt-1 dark:text-gray-400 text-gray-600">
                {project.description}
              </p>
              <div className="mt-1">
                {project.tags?.map((tag) => (
                  <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-logo-shade5 text-logo-shade2">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
