import React from "react";
import Intro from "./Intro";
import LinksFloater from "./LinksFloater";
import TechStack from "./TechStack";
import GetInTouch from "./GetInTouch";
import "./BackgroundAnimation.css";

const LandingPage = () => {
  return (
    <>
      <div className="Landing">
        <LinksFloater />
        <Intro />
        <TechStack Type="intro" />
        <TechStack />
        <TechStack Type="opensource / contributions" />
        <TechStack Type="projects" />
        <GetInTouch />
      </div>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default LandingPage;
