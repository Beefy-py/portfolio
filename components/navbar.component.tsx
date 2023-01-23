import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../utils/resources";

const Navbar = () => {
  const linkStyling = [
    "block",
    "relative",
    "text-gray-700 dark:text-gray-400 lg:hover:text-blue-700 dark:hover:text-white lg:dark:hover:text-white ",
    "py-2 pr-4 pl-3 lg:p-0",
    "border-gray-100 border-b lg:border-0 ",
    "hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:dark:hover:bg-transparent",
    "before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-logo-shade1 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
  ].join(" ");

  return (
    <header>
      <nav className="border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-2.5 border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="mr-3"
              width={50}
              height={50}
              alt="Kenny Hoft's Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-logo-shade1">
              Kenny
            </span>
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link) => (
                <li>
                  <a href={link.path} className={linkStyling}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
