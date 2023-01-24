import pfp from "../../../assets/images/gaynor-pfp.JPEG";
import styles from "./hero.css";

function Hero() {
  const scrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="hero-container">
      <div className="w-75">
        <h3 className="">Hey, I'm John Gaynor.</h3>
        <h1 className="ms-lg-4 subtitle">
          My <span>passion</span> is building solutions for websites and
          applications.
        </h1>
        <div className="hero-links d-flex justify-content-between">
          <h5 onClick={scrollBottom}>ABOUT</h5>
          <h5>PROJECTS</h5>
          <h5>CONNECT</h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
