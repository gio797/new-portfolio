import "./projects.css";

import proj1 from "../../assets/projects/project11.png";
import proj2 from "../../assets/projects/project22.png";
import proj3 from "../../assets/projects/project33.png";
import proj4 from "../../assets/projects/project44.png";
import proj5 from "../../assets/projects/proj5.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="container" id="projects">
      <div className="projects-grid">
        <div className="card stacked">
          <img src={proj1} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Space tourism website</h2>
            <p className="card__description">
              This is a frontend mentor website challenge named 'Space tourism
              multi-page website'. In this project i have used react router and
              the page is responsive.
            </p>
            <Link
              className="project-link"
              to={"https://curious-truffle-09eab6.netlify.app"}
              target="blank"
            >
              Project link
            </Link>
          </div>
        </div>
        <div className="card stacked">
          <img src={proj2} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Dictionary web app</h2>
            <p className="card__description">
              This is a frontend mentor website challenge named 'Dictionary web
              app'. In this project i have used react. website is responsive and
              has theme change possibility.
            </p>
            <Link
              className="project-link"
              to={"https://superb-druid-9d3988.netlify.app"}
              target="blank"
            >
              Project link
            </Link>
          </div>
        </div>
        <div className="card stacked">
          <img src={proj3} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">REST Countries API</h2>
            <p className="card__description">
              This is a frontend mentor website challenge named 'REST Countries
              API with color theme switcher'. In this project I have used react.
              website is responsive and has theme change possibility.
            </p>
            <Link
              className="project-link"
              to={"https://gorgeous-cobbler-04f350.netlify.app"}
              target="blank"
            >
              Project link
            </Link>
          </div>
        </div>
        <div className="card stacked">
          <img src={proj4} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Trivia</h2>
            <p className="card__description">
              This is a trivia website, where you can answer trivia questions.
              you can choose number of questions, category and difficulty.
            </p>
            <Link
              className="project-link"
              to={"https://verdant-frangollo-9bebd7.netlify.app"}
              target="blank"
            >
              Project link
            </Link>
          </div>
        </div>
        <div className="card stacked">
          <img src={proj5} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Fitness App</h2>
            <p className="card__description">
              This is a fitness app. Where I used React, typescript, React Hook
              Form, and FormSubmit.
            </p>
            <Link
              className="project-link"
              to={"https://eloquent-panda-97878a.netlify.app"}
              target="blank"
            >
              Project link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
