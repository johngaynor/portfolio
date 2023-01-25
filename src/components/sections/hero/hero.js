import { useEffect, useState } from "react";
import MyProjects from "../myProjects/myProjects";
import AboutMe from "../aboutMe/aboutMe";
import Footer from "../../footer/footer";
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
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about.scrollIntoView();
  };

  const scrollToProjects = () => {
    const myProjects = document.getElementById("my-projects");
    myProjects.scrollIntoView();
  };

  const extendNav = () => {
    const navClasses = Array.from(
      document.getElementById("nav-bars").classList
    );
    const navClass = document.getElementById("nav-bars");
    if (navClasses.includes("active")) {
      navClass.classList.remove("active");
    } else {
      navClass.classList.add("active");
    }
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-links d-md-flex d-none">
          <h5
            onClick={() => {
              scrollToAbout();
            }}
          >
            ABOUT
          </h5>
          <h5
            onClick={() => {
              scrollToProjects();
            }}
          >
            PROJECTS
          </h5>
          <h5>
            <a href="https://dot.cards/john_gaynor" target="_blank">
              CONNECT
            </a>
          </h5>
        </div>
        <div className="d-block d-md-none">
          <div id="nav-bars" onClick={extendNav}>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <div className="hamburger-links">
              <h5
                onClick={() => {
                  scrollToAbout();
                }}
              >
                ABOUT
              </h5>
              <h5
                onClick={() => {
                  scrollToProjects();
                }}
              >
                PROJECTS
              </h5>
              <h5>
                <a href="https://dot.cards/john_gaynor" target="_blank">
                  CONNECT
                </a>
              </h5>
            </div>
          </div>
        </div>
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
      <div id="about">
        <AboutMe></AboutMe>
      </div>
      <div id="my-projects">
        <MyProjects></MyProjects>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Hero;
