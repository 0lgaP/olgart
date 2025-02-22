import React, { useState } from "react";
import "./about.css";
import olga_head from "../../assets/Phone circle.png";
import olga from "../../assets/Cow head cutout.png";
import header from "../../assets/At board wt.png";

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
          {/* <div className="alien__card">
          <div className="alien__card_m">
          <div className="alien__card_b"> */}
              <p>
              👽 Ever had a moment so perfectly timed it felt like the universe was winking at you? That’s the energy I bring to my tarot readings—where coincidence and curiosity collide in the most unexpected ways.
              <br></br>      <br></br>
</p>✨ Magic? Luck? Cosmic chaos? You decide. But one thing’s for sure—you won’t forget it.
<p>
✨ Whether you’re planning an event, or just want a one-on-one reading that lights up your day in the weirdest, most delightful way possible, I’ve got you covered.
</p>

<br></br>
<p>

                📩 Let’s make some memorable memories together.
          
              </p>

        </div>
      </div>
    </section>
  );
};

export default About;
