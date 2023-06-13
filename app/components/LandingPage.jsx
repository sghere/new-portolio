import React from "react";
import Intro from "./Intro";
import LinksFloater from "./LinksFloater";
import TechStack from "./TechStack";
import GetInTouch from "./GetInTouch";

const LandingPage = () => {
  return (
    <>
      <LinksFloater />
      <Intro />
      <TechStack Type="intro" />
      <TechStack />
      <TechStack Type="opensource / contributions" />
      <TechStack Type="projects" />
      <GetInTouch />
    </>
  );
};

export default LandingPage;
