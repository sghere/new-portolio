import React from "react";
import Intro from "./Intro";
import LinksFloater from "./LinksFloater";
import TechStack from "./TechStack";

const LandingPage = () => {
  return (
    <>
      <LinksFloater />
      <Intro />
      <TechStack Type="intro" />
      <TechStack />
      <TechStack Type="opensource / contributions" />
      <TechStack Type="projects" />
    </>
  );
};

export default LandingPage;
