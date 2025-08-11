import React, { useState } from "react";
import "./about.css";
import olga_head from "../../assets/Phone circle.png";
import olga from "../../assets/Cow head cutout.png";

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
              👽 Ever had a moment so perfectly timed it felt like the universe was winking at you? That’s the energy I bring to my tarot performance.
              <br></br>      <br></br>
</p>🛸 Magic? Intuition? Artistic Drama? 
<br></br>
You decide. 
Only one thing’s gueranteed, you are about to experiance something completely different from your regularely scheduled programming.
<p>
 
</p>

<br></br>
<p>

                📩 Let’s make some memorable memories together, reach me at alientorontoart@gmail.com or DM on the Gram
          
              </p>

        </div>
      </div>
    </section>
  );
};

export default About;
