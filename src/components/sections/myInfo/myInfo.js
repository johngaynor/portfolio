import { Container } from "react-bootstrap";
import { useState } from "react";
// this area is for images
import calRecipeForm from "../../../assets/images/cal-recipe-form.png";
import calRecipe from "../../../assets/images/cal-recipe.png";
import calFoods from "../../../assets/images/cal-foods.png";
import jungleHome from "../../../assets/images/jungle-home.png";
import jungleLogin from "../../../assets/images/jungle-login.png";
import jungleCreate from "../../../assets/images/jungle-create.png";
import jungleBrowse from "../../../assets/images/jungle-browse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./myInfo.css";

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
        <div className="inner-box text-white lightblue">
          <div className="card-links">
            <a href="https://calorietracker.johngaynor.dev" target="_blank">
              <FontAwesomeIcon icon={faLink} className="link-icons" />
            </a>
            <a
              href="https://github.com/johngaynor/calorie-tracker.git"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="link-icons" />
            </a>
          </div>
          <h4>Calorie Tracker</h4>
          <p className="text-center">Timeframe: 6 weeks</p>
          <ul className="mx-5">
            <li>Submit foods/recipes, calculates macros in a daily log</li>
            <li>React/Firebase (Realtime)</li>
            <li>Javascript</li>
            <li>HTML/CSS/Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="text-white mt-2">
        <FontAwesomeIcon icon={faCircleArrowLeft} className="card-arrows" />
        <FontAwesomeIcon icon={faCircleArrowRight} className="card-arrows" />
      </div>
      <div className="big-card">
        <div className="small-card">
          <img src={jungleHome} />
        </div>
        <div className="small-card">
          <img src={jungleLogin} />
        </div>
        <div className="small-card">
          <img src={jungleCreate} />
        </div>
        <div className="small-card">
          <img src={jungleBrowse} />
        </div>
        <div className="inner-box text-white blue">
          <div className="card-links">
            <a href="https://junglecook.johngaynor.dev" target="_blank">
              <FontAwesomeIcon icon={faLink} className="link-icons" />
            </a>
            <a
              href="https://github.com/johngaynor/jungle-cook.git"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="link-icons" />
            </a>
          </div>
          <h4>Jungle Cook</h4>
          <p className="text-center">Timeframe: 3 weeks</p>
          <ul className="mx-5">
            <li>Recipe CRUD application</li>
            <li>Firebase (Firestore + userAuth)</li>
            <li>jQuery</li>
            <li>HTML/SASS</li>
          </ul>
        </div>
      </div>

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
        <div className="inner-box text-white greyblue">
          <div className="card-links">
            <a href="https://calorietracker.johngaynor.dev" target="_blank">
              <FontAwesomeIcon icon={faLink} className="link-icons" />
            </a>
            <a
              href="https://github.com/johngaynor/calorie-tracker.git"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="link-icons" />
            </a>
          </div>
          <h4>Eventsy</h4>
          <p className="text-center">Timeframe: 4 weeks</p>
          <ul className="mx-5">
            <li>Introductory website learning about layout and styling</li>
            <li>MVC Model</li>
            <li>jQuery</li>
            <li>HTML/SASS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;