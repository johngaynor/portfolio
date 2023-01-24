import { useState } from "react";
import MyProjects from "../myProjects/myProjects";
import AboutMe from "../aboutMe/aboutMe";
import styles from "./hero.css";

function Hero() {
  const [activeTab, setActiveTab] = useState("about");

  const setAbout = () => {
    setActiveTab("about");
    window.scrollTo(0, document.body.scrollHeight);
  };
  const setProjects = () => {
    setActiveTab("projects");
    window.scrollTo(1000, document.body.scrollHeight);
  };
  //   const setAbout = () => {
  //     setActiveTab("about");
  //     window.scrollTo(0, document.body.scrollHeight);
  //   };
  return (
    <>
      <div className="hero-container">
        <div className="w-75">
          <h3 className="">Hey, I'm John Gaynor.</h3>
          <h1 className="ms-lg-4 subtitle">
            My <span>passion</span> is building solutions for websites and
            applications.
          </h1>
          <div className="hero-links d-flex justify-content-between">
            <h5 onClick={setAbout}>ABOUT</h5>
            <h5 onClick={setProjects}>PROJECTS</h5>
            <h5>CONNECT</h5>
          </div>
        </div>
      </div>
      <AboutMe currentTab={activeTab}></AboutMe>
      <MyProjects currentTab={activeTab}></MyProjects>
    </>
  );
}

export default Hero;
