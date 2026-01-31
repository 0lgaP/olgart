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
            ✨🐄 Greetings Earthling, 
            <br></br>     
            It is I, Alien Toronto, Vibologist DVD <br></br>
          </p>
          <p>
            👽 Never had a Tarot Reading before?
            <br></br>
            ✅ Great! I'm not a Tarot Reader, I'm an Alien Tarot Reader with a direct line to Miss Universe. I sat on my Universal Translator and it broke - so now, I use my 1980's telephone and tarot card deck to translate. 
            <br></br>
            <br></br>
            🔮 This is not divination, this is annoying the stars.
            <br></br>
            🛸 To reach sentient customer support, book services or ask questions please make first contact via


             crop circle, <Reveal />, or
            <a href="https://www.instagram.com/alientoronto/"
              target="_blank"
              rel="noreferrer"
              aria-label="new tab Instagram"
            > <strong>Instagram DM</strong></a>

          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
