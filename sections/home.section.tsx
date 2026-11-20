import Image from "next/image";
import React from "react";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { cvUrl, services, socialLinks, workedAt, aboutSkills } from "../utils/resources";

// Hero content is intentionally not wrapped in framer-motion: it's the LCP
// candidate, and gating it behind a JS animation measurably hurt Lighthouse.

const RotatingBadge = () => (
  <div className="absolute -left-10 top-10 hidden h-28 w-28 place-items-center rounded-full bg-accent text-accent-ink shadow-2xl shadow-black/40 sm:grid lg:-left-14 lg:h-32 lg:w-32">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
      <defs>
        <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
      </defs>
      <text className="fill-current font-mono text-[10px] uppercase" textLength="230" lengthAdjust="spacing">
        <textPath href="#badge-circle">Open to work ✳ Open to work ✳ </textPath>
      </text>
    </svg>
    <ArrowDownIcon className="h-7 w-7" strokeWidth={1.75} />
  </div>
);

const Marquee = () => {
  const items = [...workedAt.map((w) => w.company).reverse(), ...aboutSkills.slice(0, 8)];
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap text-2xl font-medium tracking-tight sm:text-3xl">
          <span className="px-6 sm:px-10">{item}</span>
          <span className="text-accent">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="border-y hairline bg-bg py-6">
      <div className="container-site mb-3">
        <p className="label">Companies & tools I&apos;ve built with</p>
      </div>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee">
          {row()}
          {row(true)}
        </div>
      </div>
    </div>
  );
};

function HomeSection() {
  const current = workedAt[workedAt.length - 1];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* golden-hour glow behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-20 -z-10 h-[900px] w-[900px] bg-[radial-gradient(closest-side,rgb(var(--sun)/0.22),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 bottom-0 -z-10 h-[700px] w-[700px] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.12),transparent)]"
      />

      <div className="container-site relative pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 lg:mb-14">
          <p className="label flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new projects
          </p>
          <p className="label">Commewijne, Suriname — 5.8°N 55.1°W</p>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-2 text-2xl font-medium tracking-tight text-muted sm:text-3xl">
              Hey, I&apos;m
            </p>
            <h1 className="text-[clamp(4.5rem,15vw,12.5rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
              Kenny
              <br />
              Hoft
              <span className="align-super text-[0.35em] text-accent">✳</span>
            </h1>

            <p className="mt-10 max-w-xl text-balance text-xl leading-snug sm:text-2xl">
              A full-stack developer building{" "}
              <span className="text-accent">web, mobile & SAP</span> software
              that makes everyday work simpler — for teams in Suriname and
              beyond.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-full bg-accent py-2 pl-7 pr-2 text-lg font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-ink text-accent transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-5 w-5" strokeWidth={2} />
                </span>
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-lg font-medium"
              >
                Download CV<span className="text-accent">✳✳</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mr-0">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/me-2.5.jpeg"
                  alt="Portrait of Kenny Hoft in golden-hour light"
                  width={900}
                  height={1125}
                  priority
                  sizes="(min-width: 1024px) 448px, 90vw"
                  className="aspect-[4/5] w-full object-cover object-[50%_22%]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-24 text-[#ede8dd]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#ede8dd]/70">
                  Currently
                </p>
                <p className="mt-1 text-lg font-medium leading-tight">
                  {current.role}
                  <br />
                  <span className="text-[#ede8dd]/70">@ {current.company}</span>
                </p>
              </div>
              <RotatingBadge />
            </div>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-2 border-t hairline lg:mt-28 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.name} className="border-b hairline py-6 pr-6 lg:border-b-0">
              <p className="font-mono text-xs text-accent">#0{index + 1}</p>
              <p className="mt-3 text-lg font-medium tracking-tight">{service.name}</p>
              <p className="mt-1 text-sm text-muted">{service.description}</p>
            </li>
          ))}
        </ul>

        <ul className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-8 2xl:flex">
          {socialLinks.slice(1, 5).map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="label block rotate-180 transition-colors [writing-mode:vertical-rl] hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Marquee />
    </section>
  );
}

export default HomeSection;
