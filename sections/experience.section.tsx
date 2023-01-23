import React from "react";
import SectionWrapper from "./sectionWrapper";

function ExperienceSection() {
  return (
    <SectionWrapper name="experience">
      <ol
        data-aos="fade-down"
        className="lg:col-span-7 relative border-l border-logo-shade1"
      >
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 bg-logo-shade1"></div>
          {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time> */}
          <h3 className="text-lg font-semibold text-logo-shade1">
            Tune Create Studios
          </h3>
          <p data-aos="fade-left" className="text-gray-500 my-1">
            <span className="font-semibold"> Software Developer </span>|{" "}
            <span className="text-gray-600">April 2022 - November 2022</span>
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400"
          >
            I worked at Tune Creative Studios as a full-stack web developer. I
            build many web apps for clients and for the company. From personal
            dashboard sites to real estate sites and Donation sites for clients.
          </p>
          {/* <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 bg-logo-shade1"></div>
          {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 2022
          </time> */}
          <h3 className="text-lg font-semibold text-logo-shade1">
            Bits Please Technologies
          </h3>
          <p data-aos="fade-left" className="text-gray-500 my-1">
            <span className="font-semibold"> Software Developer </span>|{" "}
            <span className="text-gray-600">December 2022 - Current</span>
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-base font-normal text-gray-600 dark:text-gray-400"
          >
            I installed and ERP system for the company on their vps to boost the
            overal production. Migrated their React site to NextJS and helping
            managing it.
          </p>
        </li>
      </ol>
    </SectionWrapper>
  );
}

export default ExperienceSection;
