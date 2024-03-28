import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/rodrigue.kamgaing">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/rodrigue-kamgaing/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Rodriguez001">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCsgvuiRuFEhHicu-pBaXPpw">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/RodrigueUl16563">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Salut, Je suis{" "}
              <span className="highlighted-text"> Rodrigue Kamgaing</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Dev enthousiaste",
                    1000,
                    "Developeur FullStack",
                    1000,
                    "Cross platform Dev",
                    1000,
                    "Ingénieur DevOps",
                    1000,
                    "Platform Engineer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Talent pour la création des applications front-end et back-end.
                Passionné par la création et <br />
                l'optimisation des pipelines CI/CD , <br />
                de l'infrastructure as Code, de la mise en place de pratiques
                DevOps. <br />
                Avec une expertise croisée en développement logiciel et en
                opérations systèmes.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Engagez moi </button>
            <a
              href="kamgaingrodrigue_CV.pdf"
              download="kamgaingrodrigue_CV.pdf"
            >
              <button className="btn highlighted-btn">Mon CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
