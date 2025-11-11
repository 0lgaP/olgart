import React, { useState } from "react";
import "./about.css";
import olga_head from "../../assets/Phone circle.png";
import olga from "../../assets/Cow head cutout.png";
import Reveal from "./Reveal";


const About = () => {
  const [over, setOver] = useState(false);
  return (
    <section id="about">
      <div className="about__container"
   
      >
        <div
          className="about__me"
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
      
        >
          <img
            className={over ? "about__me-image" : "about__me-cartoon"}
            src={over ? olga_head : olga}
            alt=""
          />
        </div>
        <div className="about__card">
          <p>
            ✨🐄 During this Very Special Holiday Season, book the Alien Toronto Extraterrestrial Extravaganza for the People, for your earthling party guests!
            <br></br>      <br></br>
          </p>
          <p>
            👽 Never had a Tarot Reading before?
            <br></br>
            ✅ Great!
            <br></br>
            You can still claim that when we’re done here.
            <br></br>
            🛸 Abduct Alien Toronto for your Special Holidayb Season Today through


            <Reveal />, crop circles, or
            <a href="https://www.instagram.com/alientoronto/"
              target="_blank"
              rel="noreferrer"
              aria-label="new tab Instagram"
            > <strong>Instagram</strong></a>

          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
