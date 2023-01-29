import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import ScrollTopButton from "../components/scrollTopButton.component";
import AboutSection from "../sections/about.section";
import ContactSection from "../sections/contact.section";
import ExperienceSection from "../sections/experience.section";
import HomeSection from "../sections/home.section";
import ProjectsSection from "../sections/projects.section";

const Home: NextPage = () => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Kenny Hoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="description"
          content="Explore the portfolio of Kenny Hoft, a software engineer and web developer based in Suriname. Specializing in MERN-stack and NextJS development, Kenny has worked with Tune Creative Studios and Bits Please Technologies. See his latest projects including a Chat App on his portfolio website."
        />
        <meta
          name="keywords"
          content="kenny hoft,portfolio website,software engineer suriname, web developer suriname,mern-stack developer,nextJS developer, software developer suriname, Tune Creative Studios, Bits Please Technologies, Chat App"
        />
        <meta
          name="google-site-verification"
          content="qC0yuu6ZCdN7M1G07WxH8T_DxKJjJHy83hYmEOnVZss"
        />
        <title>Kenny Hoft -- Software Developer in Suriname</title>
      </Head>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default Home;
