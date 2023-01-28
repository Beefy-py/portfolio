import React from "react";

const SectionWrapper = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="z-0 relative overflow-x-hidden overflow-y-hidden"
      id={name}
    >
      <span className="absolute -top-2 left-0 text-3xl text-gray-300 dark:text-gray-800 font-extrabold lg:top-0">
        {`<${name}>`}
      </span>
      <span className="absolute bottom-0 right-0 text-3xl text-gray-300 dark:text-gray-800 font-extrabold">
        {`</${name}>`}
      </span>
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
