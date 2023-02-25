import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import ScrollTopButton from "../components/scrollTopButton.component";
import useDarkmode from "../hooks/darkmode";
import AboutSection from "../sections/about.section";
import ContactSection from "../sections/contact.section";
import ExperienceSection from "../sections/experience.section";
import HomeSection from "../sections/home.section";
import ProjectsSection from "../sections/projects.section";

const Home: NextPage = () => {
  const isDark = useDarkmode();

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
          content="Explore the portfolio of Kenny Hoft 👨🏽‍💻, a software engineer and web developer based in Suriname. Specializing in MERN-stack and NextJS development, Kenny has worked with Tune Creative Studios and Bits Please Technologies. See his latest projects including a Chat App on his portfolio website."
        />
        <meta
          name="keywords"
          content="kenny hoft,portfolio website,software engineer suriname, web developer suriname,mern-stack developer,nextJS developer, software developer suriname, Tune Creative Studios, Bits Please Technologies, Chat App"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Kenny Hoft -- Software Developer in Suriname</title>
        <meta
          name="description"
          content="Explore the portfolio of Kenny Hoft, a software engineer and web developer based in Suriname. Specializing in MERN-stack and NextJS development, Kenny has worked with Tune Creative Studios and Bits Please Technologies. See his latest projects including a Chat App on his portfolio website."
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.kennyhoft.live/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kenny Hoft -- Software Developer in Suriname"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Kenny Hoft, a software engineer and web developer based in Suriname. Specializing in MERN-stack and NextJS development, Kenny has worked with Tune Creative Studios and Bits Please Technologies. See his latest projects including a Chat App on his portfolio website."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/ylwllkb5/production/8be744e348a6fbe1a638db52b21cf83bd300ad72-1898x995.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kennyhoft.live" />
        <meta property="twitter:url" content="https://www.kennyhoft.live/" />
        <meta
          name="twitter:title"
          content="Kenny Hoft -- Software Developer in Suriname"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Kenny Hoft, a software engineer and web developer based in Suriname. Specializing in MERN-stack and NextJS development, Kenny has worked with Tune Creative Studios and Bits Please Technologies. See his latest projects including a Chat App on his portfolio website."
        />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/ylwllkb5/production/8be744e348a6fbe1a638db52b21cf83bd300ad72-1898x995.png"
        />

        <meta
          name="google-site-verification"
          content="7u0GSchEa9S1HENjfqRd-m7nBMYuwTdYmHJ2B3DoMNw"
        />

        <title>Kenny Hoft -- Software Developer in Suriname</title>
      </Head>
      <Layout>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
      <ScrollTopButton />
    </>
  );
};

export default Home;
