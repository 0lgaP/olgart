import React, { useState } from "react";
import "./about.css";
import olga from "../../assets/bluehair.png"; /* change cartoon */
import olga_head from "../../assets/olga_head.png"; /* change photo */

import Flip from './Flip'

const About = () => {
  const [over, setOver] = useState(false);
  return (
    <section id="about">
        <div className="about__content">
     <Flip one={olga} two={olga_head} alt={"blue girl cartoon turns into my smily freckled face"} />
          <p>
          Toronto artist specializing in acrylic paintings in the illustrative, representational, urban, lowbrow, comic, pop art style. My work inspects the similarities between mundane and cosmic, encouraging you to explore your own ‘otherness’. Please enjoy my corner of the internet, and follow me on instagram for live updates.
          </p>
        </div>
    </section>
  );
};

export default About;
