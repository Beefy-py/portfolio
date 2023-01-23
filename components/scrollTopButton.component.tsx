import React, { useEffect, useState } from "react";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 w-14 bg-logo-shade2 hover:bg-logo-shade1 focus:ring-2 focus:outline-transparent focus:ring-offset-2 focus:ring-logo-shade1 p-2 rounded-sm cursor-pointer opacity-50 hover:opacity-100 transition ease"
          onClick={handleScroll}
        >
          <ArrowLongUpIcon className=" text-gray-200" />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
