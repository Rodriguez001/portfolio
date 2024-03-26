import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        {/* <div className="resume-heading-github">
          {props.github ? <a href={props.github}>lien github</a> : <div></div>}
        </div> */}
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Expérience", logoSrc: "work-history.svg" },
    { label: "Compétences", logoSrc: "programming-skills.svg" },
    { label: "Projets", logoSrc: "projects.svg" },
    { label: "Centres d'interêt", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Cloud(Aws, GCP)", ratingPercentage: 70 },
    { skill: "Kubernetes", ratingPercentage: 70 },
    { skill: "Terraform", ratingPercentage: 73 },
    { skill: "Ansible", ratingPercentage: 70 },
    { skill: "Docker", ratingPercentage: 89 },
    { skill: "Jenkins", ratingPercentage: 71 },
    { skill: "Gitlab-ci", ratingPercentage: 71 },
    { skill: "TypeScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Angular JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo DB, Neo4J", ratingPercentage: 89 },
    { skill: "Java, Spring, Hibernate", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Portfolio Personnel",
      duration: { fromDate: "01/2024", toDate: "03/2024" },
      //github: "",
      description:
        "Un site Web de portfolio personnel pour présenter tous mes détails et projets en un seul endroit.",
      subHeading: "Technologies utilisées: React JS, Bootsrap",
    },
    {
      title: "Airmadness Project ",
      duration: { fromDate: "11/2022", toDate: "01/2023" },
      // github: "",
      description: "Application web de reservation de billets en ligne",
      subHeading:
        "Technologies utilisées:  Spring Java, Angular Js, Postgres, Express Js, Node Js, Sockets",
    },
    {
      title: "Projet de géolocation ",
      duration: { fromDate: "01/2023", toDate: "03/2023" },
      // github: "",
      description:
        "Applications web de gestion géolocation integration du kafka et web sockets",
      subHeading:
        "Technologies utilisées: FastApi, Kafka, docker-compose, Leaflet JS, Mongo DB, Node JS, Tailwind.",
    },
    {
      title: "Chatbot ",
      duration: { fromDate: "02/2024", toDate: "03/2024" },
      // github: "https://github.com/Rodriguez001/Chatbot-Source-codes",
      description:
        "Bot utilisant Chatgpt OpenAI integration intégrant du Spring, Kubernetes",
      subHeading:
        "Technologies utilisées: Spring, React JS, Kubernetes, Chatgpt OpenAI",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Université de Yaoundé I, Cameroun"}
        subHeading={"Master 2 en Informatique option Réseaux et Sécurité"}
        fromDate={"2019"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Ecole d’ingénieur CY-Tech, Cloud Computing: Pau, France"}
        subHeading={"Ingénieur Dev FullStack/DevOps"}
        fromDate={"2022"}
        toDate={"2024"}
      />
      {/* <ResumeHeading
        heading={"High School "}
        subHeading={"Command Secondary School Mbiri"}
        fromDate={"2007"}
        toDate={"2012"}
      /> */}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"H2ALTITUDE, Yaoundé"}
          subHeading={"STAGE DEV FULLSTACK"}
          fromDate={"04/2021"}
          toDate={"10/2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Contribuer au développement d’applications web innovantes avec
            Angular JS
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Aider à la conception et au développement d’API REST performantes
            FastAPI et en Spring WEB
          </span>
          <br />
          <span className="resume-description-text">
            - Conception et la maintenance de la base de données de
            l’application.{" "}
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"RHOPEN, Paris"}
          subHeading={"STAGE DevOps"}
          fromDate={"03/2023"}
          toDate={"09/2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Gestion de travail en méthode Agile, participer au design et au
            build de solutions DevOps et notamment sur les aspects : CI/CD, IaC
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Provisioning avec Terraform, Configuration management avec Ansible
          </span>
          <br />
          <span className="resume-description-text">
            - Déploiement en On-premise sur cluster KUBERNETES, Monitoring avec
            Promotheus, Grafana, Nagios.{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          // github={projectsDetails.github}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Partage"
        description="En plus d'être un passionné de technologie et un rédacteur de code, j'aime aussi enseigner aux gens ce que je sais simplement parce que je crois au partage."
      />
      <ResumeHeading
        heading="Musique"
        description="Écouter de la musique apaisante est quelque chose avec lequel je ne peux jamais faire de compromis, parcourir les classements de chansons pop de Spotify est parfois le meilleur moyen de soulager le stress que je puisse trouver."
      />
      <ResumeHeading
        heading="Sport"
        description="Le sport est bien plus qu'une simple activité physique, c'est une véritable passion qui m'anime au quotidien. En tant que fervent adepte du sport, je trouve dans la pratique sportive un équilibre essentiel pour mon bien-être physique et mental. "
      />
      <ResumeHeading
        heading="Cinéma"
        description="Le cinéma est pour moi bien plus qu'une simple distraction, c'est un art qui captive et inspire."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Profil professionnel"}
          subHeading={"Ma biographie officielle"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
