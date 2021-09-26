import React from "react";

import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
