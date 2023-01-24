import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
// this area is for images
import calRecipeForm from "../../../assets/images/cal-recipe-form.png";
import calRecipe from "../../../assets/images/cal-recipe.png";
import calFoods from "../../../assets/images/cal-foods.png";
import jungleHome from "../../../assets/images/jungle-home.png";
import jungleLogin from "../../../assets/images/jungle-login.png";
import jungleCreate from "../../../assets/images/jungle-create.png";
import jungleBrowse from "../../../assets/images/jungle-browse.png";
import eventsyHome from "../../../assets/images/eventsy-home.png";
import eventsyBlog from "../../../assets/images/eventsy-blog.png";
import eventsyContact from "../../../assets/images/eventsy-contact.png";
import eventsyGallery from "../../../assets/images/eventsy-gallery.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./myProjects.css";

function MyProjects(currentTab) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (currentTab.currentTab === 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [currentTab]);

  // functions to click through projects
  let activeIndex = 0;
  const cards = document.getElementsByClassName("big-card");
  const nextCard = () => {
    // bump active index
    const nextIndex = activeIndex + 1 <= cards.length - 1 ? activeIndex + 1 : 0;

    const currentCard = document.querySelector(`[data-index="${activeIndex}"]`);

    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    // active card becomes after, next card becomes active
    currentCard.dataset.status = "after";

    nextCard.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextCard.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const previousCard = () => {
    // bump active index
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : cards.length - 1;

    const currentCard = document.querySelector(`[data-index="${activeIndex}"]`);

    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    currentCard.dataset.status = "before";

    nextCard.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextCard.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };
  return (
    <>
      {show ? (
        <div className="info-container pt-5">
          <div className="big-card-group">
            <div className="big-card" data-index="0" data-status="active">
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
              <div className="inner-box text-white red-orange">
                <div className="card-links">
                  <a
                    href="https://calorietracker.johngaynor.dev"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="link-icons" />
                  </a>
                  <a
                    href="https://github.com/johngaynor/calorie-tracker.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      className="link-icons"
                    />
                  </a>
                </div>
                <h4>Calorie Tracker</h4>
                <p className="text-center">Timeframe: 6 weeks</p>
                <ul className="mx-5">
                  <li>
                    Submit foods/recipes, calculates macros in a daily log
                  </li>
                  <li>React/Firebase (Realtime)</li>
                  <li>Javascript</li>
                  <li>HTML/CSS/Bootstrap</li>
                </ul>
              </div>
            </div>
            <div className="big-card" data-index="1" data-status="unknown">
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
              <div className="inner-box text-white orange">
                <div className="card-links">
                  <a href="https://junglecook.johngaynor.dev" target="_blank">
                    <FontAwesomeIcon icon={faLink} className="link-icons" />
                  </a>
                  <a
                    href="https://github.com/johngaynor/jungle-cook.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      className="link-icons"
                    />
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
            <div className="big-card" data-index="2" data-status="unknown">
              <div className="small-card">
                <img src={eventsyHome} />
              </div>
              <div className="small-card">
                <img src={eventsyBlog} />
              </div>
              <div className="small-card">
                <img src={eventsyGallery} />
              </div>
              <div className="small-card">
                <img src={eventsyContact} />
              </div>
              <div className="inner-box text-white yellow">
                <div className="card-links">
                  <a href="https://eventsy.johngaynor.dev" target="_blank">
                    <FontAwesomeIcon icon={faLink} className="link-icons" />
                  </a>
                  <a
                    href="https://github.com/johngaynor/eventsy.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      className="link-icons"
                    />
                  </a>
                </div>
                <h4>Eventsy</h4>
                <p className="text-center">Timeframe: 4 weeks</p>
                <ul className="mx-5">
                  <li>
                    Introductory website learning about layout and styling
                  </li>
                  <li>MVC Model</li>
                  <li>jQuery</li>
                  <li>HTML/SASS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white mt-2">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="card-arrows previous"
              onClick={previousCard}
            />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="card-arrows next"
              onClick={nextCard}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MyProjects;
