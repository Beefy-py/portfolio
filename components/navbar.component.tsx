import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../utils/resources";
import useDarkmode from "../hooks/darkmode";
import useLocalTime from "../hooks/localTime";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useDarkmode();
  const time = useLocalTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b hairline bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" width={34} height={34} alt="" priority />
          <span className="text-lg font-semibold tracking-tight">Kenny Hoft</span>
          <span className="label hidden border-l hairline pl-3 xl:inline">
            SR · {time}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <li key={link.path}>
              <a href={link.path} className="group flex items-baseline gap-1.5 text-[15px]">
                <span className="font-mono text-[10px] text-muted transition-colors group-hover:text-accent">
                  0{index + 1}
                </span>
                <span className="link-underline">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-10 w-10 place-items-center rounded-full border hairline transition-colors hover:border-accent hover:text-accent"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-full bg-ink py-1.5 pl-5 pr-1.5 text-sm font-medium text-bg sm:flex"
          >
            Let&apos;s talk
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2} />
            </span>
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border hairline lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`container-site overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col justify-center gap-2 pb-16">
          {navLinks.map((link, index) => (
            <li key={link.path} className="border-b hairline">
              <a
                href={link.path}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 text-5xl font-semibold tracking-tight"
              >
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
          <li className="label pt-6">Commewijne, Suriname · {time}</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
