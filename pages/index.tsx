import React from "react";

import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
