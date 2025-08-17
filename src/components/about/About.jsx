import React, { useState } from "react";
import "./about.css";
import olga_head from "../../assets/Phone circle.png";
import olga from "../../assets/Cow head cutout.png";
import Reveal from "./Reveal";


const About = () => {
  const [over, setOver] = useState(false);
  return (
    <section id="about">
      <div className="about__container">
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
        🐄 I’m here to abduct every willing human into their own best timeline
            <br></br>      <br></br>
            </p>
          <p>
            👽 Never had a Tarot Reading before? 
            <br></br> 
            ✅ Great! 
            <br></br> 
            You can still claim that when we’re done here. I can't see the future, I translate tarot cards. The message form <strong>the universe</strong> is simply from your <strong>best timeline</strong>.
            <br></br>      <br></br>
          </p>🛸 Magic? Intuition? Logic and Initiative? I'm sure it's magic. 
          <br></br>
          Y&et I still allow you to decide for yourself!
          Only one thing’s gueranteed, you are about to experiance something completely different from your regularely scheduled programming.
          <p>

          </p>

          <br></br>
          <p>

            📩 Let’s make some memorable memories together, reach me at <Reveal /> or 
            <a href="https://www.instagram.com/alientoronto/"
             target="_blank"
             rel="noreferrer"
             aria-label="new tab Instagram"
            > <strong>DM me on the Gram</strong></a>

          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
