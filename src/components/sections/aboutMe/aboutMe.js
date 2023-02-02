import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import pfp from "../../../assets/images/gaynor-pfp.JPEG";
import styles from "./aboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-box p-xl-5">
        <div className="about-profile">
          <img src={pfp} alt="" />
        </div>
        <div className="about-text">
          <div className="about-skills">
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <span>Bootstrap</span>
            <span>React</span>
            <span>Firebase</span>
            <span>MVC</span>
            <span>Node.js</span>
          </div>
          <h1 className="about-header">
            An Eye for <span className="header-orange-red">Optimization</span>
          </h1>
          <h5>
            In my years as a competitive Rubik's Cube solver, I discovered an
            interest in using technology to optimize human tasks. This branched
            into a passion for developing applications that make life easier for
            its users. I'm still in my early stages as a developer but I believe
            I have the passion and determination to change the world someday.
          </h5>
        </div>
      </div>

      <div className="w-75">
        <h4>
          My Projects <FontAwesomeIcon icon={faArrowDown} className="mx-2" />
        </h4>
      </div>
    </div>
  );
}

export default AboutMe;
