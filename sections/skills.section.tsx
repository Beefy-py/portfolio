import React from "react";
import SectionWrapper from "./sectionWrapper";

function SkillsSection() {
  return (
    <SectionWrapper name="skills">
      <div className="col-span-full w-3/4">
        <h2 className="text-gray-400 text-xl font-semibold mb-2">
          Technologies:
        </h2>
        <span className="bg-blue-100 text-logo-shade1 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-800">
          Javascript
        </span>
      </div>
      <div className="col-span-full w-3/4 mt-2">
        <h2>Languages</h2>
        <span className="bg-blue-100 text-logo-shade1 text-md font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-800">
          English
        </span>
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;
