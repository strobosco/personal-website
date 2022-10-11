import Head from "next/head";

import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio for Niccolo Nobili, software developer studying Computer Science at the University of Pittsburgh. Skilled with React, Next.js, JavaScript, TypeScript, Java, Python, Node.js, Django."
        ></meta>
        <title>Niccolo Nobili</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <AboutMe />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}
