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
            ✨🐄 Greetings Earthling!
            <br></br>
            <br></br>
            👽 It is I, Alien Toronto, Vibologist DVD <br></br>
          </p>
          <p>
            🔮 Never had a Tarot Reading before?
            <br></br>
            ✅ Great! I'm not a Tarot Reader, I'm an <strong>Alien</strong> Tarot Reader with a direct line to Miss Universe.
            <br></br>


            <br></br>
            🛸 To reach sentient customer support reach out via

            <Reveal />, or
            <a href="https://www.instagram.com/alientoronto/"
              target="_blank"
              rel="noreferrer"
              aria-label="new tab Instagram"
            > <strong>Instagram DM</strong></a>

            <br></br>
            🪐 Corporate Bookings through <a
            href="https://inentertainment.ca/magic-psychics#:~:text=to%20your%20own.-,ALIEN%20TORONTO%20TAROT,-The%20creature%20known"
            target="_blank"
            rel="noreferrer"
            aria-label="new tab inentertainment"
            ><strong>InEntertainment</strong></a>
          </p>


        </div>
      </div>
    </section>
  );
};

export default About;
