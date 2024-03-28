import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      //const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner("Remplissez les champs!");
        toast.error("Remplissez les champs!");
        setBool(false);
      } else {
        setBanner("message envoyée!");
        toast.success("message envoyée!");
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Restons en Contact"} title={"Contact"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Prenez contact 📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Envoyez votre mail ici!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Nom</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Envoyez
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
