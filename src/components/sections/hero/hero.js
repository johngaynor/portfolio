import { useEffect, useState } from "react";
import MyProjects from "../myProjects/myProjects";
import AboutMe from "../aboutMe/aboutMe";
import styles from "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCode,
  faCodeBranch,
  faCodeCommit,
  faDumbbell,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const setAbout = () => {
    setActiveTab(0);
    window.scrollTo(0, document.body.scrollHeight);
  };
  const setProjects = () => {
    setActiveTab(1);
    window.scrollTo(1000, document.body.scrollHeight);
  };

  return (
    <>
      <div className="hero-container">
        <FontAwesomeIcon icon={faCode} className="hero-icons closing-tag" />
        <FontAwesomeIcon
          icon={faCodeBranch}
          className="hero-icons code-branch"
        />
        <FontAwesomeIcon
          icon={faCodeCommit}
          className="hero-icons code-commit"
        />
        <FontAwesomeIcon icon={faFileCode} className="hero-icons code-file" />
        <FontAwesomeIcon icon={faDumbbell} className="hero-icons icon-weight" />
        <div className="hero-links">
          <h5 onClick={setAbout}>ABOUT</h5>
          <h5 onClick={setProjects}>PROJECTS</h5>
          <h5>CONNECT</h5>
        </div>
        <div className="w-75 subtitles">
          <h3>Hey, I'm John Gaynor.</h3>
          <h1 className="subtitle middle">
            My <span>passion</span> is building solutions for websites and
            applications.
          </h1>
          <h1 className="subtitle smaller mb-5 pb-5">
            Oh, and lifting heavy stuff off the ground for fun.
          </h1>
          <h4>
            About Me <FontAwesomeIcon icon={faArrowDown} className="mx-2" />
          </h4>
        </div>
      </div>
      <AboutMe></AboutMe>
      <MyProjects currentTab={activeTab}></MyProjects>
    </>
  );
}

export default Hero;
