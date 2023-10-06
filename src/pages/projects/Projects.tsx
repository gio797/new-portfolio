import "./projects.css";
import cardImg1 from "../../assets/pexels-nadezhda-moryak-6229045.jpg";
import cardImg2 from "../../assets/pexels-blaz-erzetic-2426085.jpg";
import cardImg3 from "../../assets/pexels-sourav-majumdar-18440392.jpg";
import cardImg4 from "../../assets/pexels-dan-cristian-pădureț-1476321.jpg";
import cardImg5 from "../../assets/pexels-emirhan-sucu-18411634.jpg";
import cardImg6 from "../../assets/pexels-hendrik-b-744318.jpg";
import cardImg7 from "../../assets/pexels-mindscape-18442268.jpg";

function Projects() {
  return (
    <div className="container" id="projects">
      <div className="projects-grid">
        <div className="card stacked featured">
          <img src={cardImg1} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Lorem, ipsum dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg2} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Lorem, ipsum dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg3} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">
              Lorem, ipsum dolor.Lorem, ipsum dolor.
            </h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem ipsum, dolor sit Tempora</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg4} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Lorem, ipsum dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg5} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg6} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">Lorem, ipsum. Lorem, ipsum dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="card stacked">
          <img src={cardImg7} alt="" className="card__img" />
          <div className="card__content">
            <h2 className="card__title">ipsum dolor.</h2>
            <p className="card__price">$325</p>
            <p className="card__description">
              Lorem, ipsum dolor. Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
