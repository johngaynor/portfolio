import { useEffect, useState } from "react";

import pfp from "../../../assets/images/gaynor-pfp.JPEG";
import styles from "./aboutMe.css";

function AboutMe(currentTab) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (currentTab.currentTab === "about") {
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AboutMe;
