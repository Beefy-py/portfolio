import Image from "next/image";
import React from "react";
import { aboutSkills } from "../utils/resources";
import SectionWrapper from "./sectionWrapper";

function AboutSection() {
  const interestsClassNames =
    "bg-gray-200 dark:text-logo-shade1 text-logo-shade2 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-800 my-1";
  return (
    <SectionWrapper name="about">
      <div className="place-self-center lg:col-span-7 text-md lg:text-lg text-gray-800 dark:text-gray-300">
        <p data-aos="fade-right" className="mb-3">
          I am a highly motivated and dedicated 18-year-old software developer
          with 5 years of experience under my belt. I discovered my passion for
          coding at the young age of 13 and have been honing my skills ever
          since. I am proud to have had the opportunity to work at a software
          company, where I was able to gain valuable experience and develop my
          skills further.
        </p>
        <p data-aos="fade-right" className="mb-3">
          In my free time, I enjoy indulging in my love for anime, which has
          been a hobby of mine for many years. Not only do I find it to be a
          great source of entertainment, but I also find the storytelling and
          animation to be incredibly inspiring.
        </p>
        <p data-aos="fade-right" className="mb-3">
          As I continue to develop my skills and gain experience, I am now
          looking to expand my knowledge and take on new challenges by studying
          Data Science. I am excited to delve into this field and am eager to
          learn as much as possible. I believe that with my background in
          software development and my passion for data, I will be able to make a
          meaningful impact in this field.
        </p>
        <p data-aos="fade-right" className="">
          I am always looking for new opportunities to learn and grow as a
          developer, and I am confident that my skills and enthusiasm will
          enable me to make a positive impact in any project I am a part of.
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="400"
        className="hidden relative lg:mt-0 lg:col-span-5 lg:flex justify-end align-middle items-center"
      >
        <Image
          src="https://shorturl.at/nCKL0"
          alt="Image of Kenny Hoft on his portfolio website z-1"
          className="rounded-md"
          width={400}
          height={400}
        />
        {/* <div className="rounded-md absolute left-0 right-0 bottom-0 top-0 backdrop-blur-md z-2"></div> */}
        {/* <div className="bg-logo-shade3 w-48 h-48 rounded-full absolute -z-10 -right-12 -bottom-16 blur-lg brightness-110 contrast-125"></div>{" "}
        <div className="bg-logo-shade3 w-20 h-20 rounded-full absolute -z-10 -left-12 -top-16 blur-lg brightness-110 contrast-125"></div> */}
      </div>

      <div className="col-span-full border-t-2 border-gray-200 dark:border-gray-800 mt-4 pt-2 flex flex-row flex-wrap">
        {" "}
        {aboutSkills.map((skill, index) => (
          <span
            key={index + skill}
            data-aos={`fade-left`}
            data-aos-delay={`${index * 100}`}
            className={interestsClassNames}
          >
            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
