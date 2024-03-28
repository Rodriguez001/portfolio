import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Ingénieur Devops/Fullstack avec des connaissances sur les principes Devops/Cloud, un talent pour la création des applications avec la plus grande efficacité. Professionnel et désireux d'être un atout pour une organisation.",
    highlights: {
      bullets: [
        "DevOps et notamment sur les aspects : CI/CD, IaC ",
        "Development Fullstack",
        "Provisionner les moyens techniques",
        "Terraform, Développer des playbooks Ansible et des Jobs Jenkins",
        "Formation et montée en compétence sur KUBERNETES",
        "Interactive Front End ",
        "React et React Native",
        "Développement Java",
        "Building REST API",
        "Base de données NoSql",
        "Test Driven Development (Junit, Pytest,..)",
      ],
      heading: "Quelques faits saillants :",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Pourquoi me choisir?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Engagez moi{" "}
              </button>
              <a
                href="./kamgaingrodrigue_CV.pdf"
                download="kamgaingrodrigue_CV.pdf"
              >
                <button className="btn highlighted-btn">Mon CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
