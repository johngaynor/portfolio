import { useEffect, useState } from "react";
import MyProjects from "../myProjects/myProjects";
import AboutMe from "../aboutMe/aboutMe";
import styles from "./hero.css";

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

  useEffect(() => {
    const headers = Array.from(document.querySelectorAll(".hero-links h5"));
    headers.forEach((header, index) => {
      header.classList.remove("active");
      if (index === activeTab) {
        header.classList.add("active");
      }
    });
  }, [activeTab]);

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
