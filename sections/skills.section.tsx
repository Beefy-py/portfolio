import React from "react";
import SectionWrapper from "./sectionWrapper";

const technicalSkills = [
  "TypeScript",
  "ReactJS",
  "NodeJS",
  "Go",
  "Python",
  "Django",
  "React Native",
  "SAP",
  "Linux",
  "Docker",
  "Lua",
];

const languageSkills = ["Dutch", "English", "Spanish"];

const skillPillClass =
  "bg-blue-100 text-logo-shade1 text-md font-medium mr-2 mb-2 px-2.5 py-1 rounded dark:bg-gray-800 inline-block";

function SkillsSection() {
  return (
    <SectionWrapper name="skills">
      <div className="col-span-full w-3/4">
        <h2 className="text-gray-400 text-xl font-semibold mb-2">
          Technologies:
        </h2>
        {technicalSkills.map((skill) => (
          <span key={skill} className={skillPillClass}>
            {skill}
          </span>
        ))}
      </div>
      <div className="col-span-full w-3/4 mt-2">
        <h2 className="text-gray-400 text-xl font-semibold mb-2">
          Languages
        </h2>
        {languageSkills.map((skill) => (
          <span key={skill} className={skillPillClass}>
            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;
