import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "../utils/resources";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode(localStorage.theme === "dark" || !localStorage.theme);
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(() => !darkMode);
    // console.log(localStorage.theme, localStorage.getItem("theme"));
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        localStorage.theme = "light";
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        localStorage.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        localStorage.theme = "dark";
      }
    }
  };

  const linkStyling = [
    "block",
    "relative",
    "text-lg text-gray-600 dark:text-gray-400 lg:hover:text-gray-900 dark:hover:text-white lg:dark:hover:text-white ",
    "py-2 pr-4 pl-3 lg:p-0",
    "before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-logo-shade1 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
  ].join(" ");

  return (
    <header>
      <nav className="border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-2.5 border-b-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="mr-3"
              width={50}
              height={50}
              alt="Kenny Hoft's Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap text-logo-shade1">
              Kenny
            </span> */}
          </Link>

          <button
            className="lg:hidden text-logo-shade1 hover:ring-2 hover:ring-logo-shade1 rounded-sm p-2 transition"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <Bars3BottomRightIcon className="w-8 h-8" />
          </button>

          <div
            className={`${
              !showNavbar && "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <button
                onClick={handleDarkModeToggle}
                className=" outline-none border-2 p-2 rounded-sm border-dashed border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <SunIcon
                  className={`${!darkMode && "hidden"} h-6 text-gray-500`}
                />
                <MoonIcon
                  className={`${darkMode && "hidden"} h-6 text-gray-500`}
                />
              </button>
              {navLinks.map((link, index) => (
                <li key={index + link.path}>
                  <a href={link.path} className={linkStyling}>
                    {link.name}
                  </a>
                </li>
              ))}{" "}
              <li>
                <Link
                  href="/blog"
                  className={`block relative text-lg text-logo-shade1 hover:text-logo-shade2 transition border-2 border-dashed border-logo-shade1 px-3 py-1 hover:bg-logo-shade5`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
