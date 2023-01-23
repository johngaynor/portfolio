import { Container } from "react-bootstrap";
import calRecipeForm from "../../../assets/images/cal-recipe-form.png";
import calRecipe from "../../../assets/images/cal-recipe.png";
import calFoods from "../../../assets/images/cal-foods.png";
import styles from "./myInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function MyInfo() {
  return (
    <div className="info-container">
      <div className="big-card">
        <div className="small-card">
          <img src={calFoods} />
        </div>
        <div className="small-card">
          <img src={calRecipe} />
        </div>
        <div className="small-card">
          <img src={calFoods} />
        </div>
        <div className="small-card">
          <img src={calRecipeForm} />
        </div>
        <div className="inner-box">
          <h4>Calorie Tracker</h4>
          <p className="text-center">Timeframe: 6 weeks</p>
          <ul className="mx-4">
            <li>React</li>
            <li>Firebase (Realtime Database)</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Bootstrap</li>
          </ul>
          <div className="d-flex justify-content-evenly w-75 mx-auto">
            <a href="https://calorietracker.johngaynor.dev" target="_blank">
              Go to Site
            </a>
            <a
              href="https://github.com/johngaynor/calorie-tracker.git"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="text-white mt-2">
        <FontAwesomeIcon icon={faCircleArrowLeft} className="card-arrows" />
        <FontAwesomeIcon icon={faCircleArrowRight} className="card-arrows" />
      </div>
    </div>
  );
}

export default MyInfo;
