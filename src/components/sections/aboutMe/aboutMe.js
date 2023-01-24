import { useEffect, useState } from "react";

import pfp from "../../../assets/images/gaynor-pfp.JPEG";
import styles from "./aboutMe.css";

function AboutMe(currentTab) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (currentTab.currentTab === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [currentTab]);
  return (
    <>
      {show ? (
        <div className="about-container">
          <div className="about-box w-75">
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
              <h3 className="about-header">
                An Eye for{" "}
                <span className="header-orange-red">Optimization</span>
              </h3>
              <p className="subtitle pe-4">
                In my years as a competitive Rubik's Cube solver, I discovered
                an interest in using technology to optimize human tasks. This
                branched into a passion for developing applications that make
                life easier for its users.
              </p>
              <p className="subtitle pe-4">
                This led to me pursuing a degree in Informatics at IUPUI
                (current sophomore). I have since completed IUPUI's Web & Mobile
                Development Boot Camp and continue to learn and develop my own
                projects. I'm still in my early stages as a developer but I
                believe I have the passion and determination to change the world
                someday.
              </p>
              {/* <p className="subtitle pe-4">
                Outside of school and coding I spend most of my free time in the
                gym or developing new skills.
              </p> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AboutMe;
