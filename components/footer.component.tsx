import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { contactEmail, navLinks, socialLinks } from "../utils/resources";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t hairline">
      <div className="container-site grid gap-10 pb-8 pt-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="label mb-4">Say hello</p>
          <a
            href={`mailto:${contactEmail}`}
            className="link-underline text-2xl font-medium tracking-tight sm:text-3xl"
          >
            {contactEmail}
          </a>
        </div>
        <div>
          <p className="label mb-4">Sitemap</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="link-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-4">Elsewhere</p>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center font-semibold leading-[0.8] tracking-[-0.06em] text-ink/[0.06] text-[20.5vw] max-[1400px]:text-[19.5vw] min-[1400px]:text-[270px]"
        >
          Kenny Hoft
        </p>
      </div>

      <div className="container-site flex items-center justify-between border-t hairline py-5">
        <span className="label">© {new Date().getFullYear()} Kenny Hoft · Made in Suriname</span>
        <a href="#home" className="label group flex items-center gap-2 hover:text-accent">
          Back to top
          <ArrowUpIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
