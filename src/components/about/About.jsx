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
          ✨🐄 Greetings Cosmic Citizen!
            <br></br>
            <br></br>
            👽 It is I, Alien Toronto, Tarot Reader who annoys the stars! <br></br>
          </p>
          <p>
          🔮 If you've never had a Tarot Reading before, relax, you can still say that after we're done here! Alien Tarot is about abducting you into your own best timeline through sci-fi comedy, pop lyrics and expert timing.
           


            <br></br>
            <br></br>
            🛸 <Reveal /> to Book an alien abduction today!
      
          </p>


        </div>
      </div>
    </section>
  );
};

export default About;
