import React from "react";

import type { NextPage } from "next";
import MobileNavBar from "./MobileNavBar";
import MobileAboutMe from "./MobileAboutMe";

import MobileProjects from "./MobileProjects";
import Footer from "./Footer";

const Home: NextPage = () => {
  return (
    <>
      <MobileNavBar />
      <MobileAboutMe />
      <MobileProjects />
      <Footer />
    </>
  );
};

export default Home;
