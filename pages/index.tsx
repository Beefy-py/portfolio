import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="description"
          content="Portfolio website of Kenny Hoft. Kenny Hoft works at Bits Please Technologies."
        />
        <script
          src="https://kit.fontawesome.com/8e5bc578dd.js"
          crossOrigin="anonymous"
        ></script>
        <title>Kenny Hoft</title>
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
