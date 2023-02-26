import Image from "next/image";
import Link from "next/link";
import React from "react";
import { additionalInfo, navLinks, socialLinks } from "../utils/resources";
import Newsletter from "./newsLetter.blog.component";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 mt-2">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-700 dark:text-gray-200"
        >
          <Image
            src="/logo.png"
            className="mr-3 grayscale"
            width={40}
            height={40}
            alt="Kenny Hoft's Logo in the footer"
          />
          Kenny Hoft
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Software developer who strives to be Data Scientist.
        </p>
        <Newsletter />
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {navLinks.map((link, index) => (
            <li key={"link-" + index}>
              <a
                href={link.path}
                className="mr-4 hover:underline decoration-logo-shade3 md:mr-6"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Link href="/blog" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {socialLinks.map((link, index) => {
            return (
              <li key={"link-" + index}>
                <a
                  href={link.url}
                  target="_blank"
                  className="mr-4 transition text-gray-300 hover:text-logo-shade3 md:mr-6"
                >
                  <i className={`fa-solid text-xl ${link.icon}`}></i>{" "}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Kenny Hoft™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
