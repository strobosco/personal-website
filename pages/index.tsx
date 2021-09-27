import React from "react";

import type { NextPage } from "next";

import { useScreenType } from "../utils/screenType";

import FullscreenView from "../components/FullscreenView";
import MobileView from "../components/MobileView";

const Home: NextPage = () => {
  return <>{useScreenType() ? <FullscreenView /> : <MobileView />}</>;
};

export default Home;
