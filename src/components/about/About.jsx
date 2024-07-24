import React from "react";
import "./about.css";
import olga from "../../assets/bluehair.png"; /* change cartoon */
import olga_head from "../../assets/olga_head.png"; /* change photo */

import Flip from './Flip'
import Bio from "./Bio";
import About_Container from "./About_Container";

const About = () => {

  return (
    <section id="about">
      <div className="about__content">
        <About_Container>
        <Flip one={olga} two={olga_head} alt={"blue girl cartoon turns into my smily freckled face"} />
        <Bio bio={"Toronto artist specializing in acrylic paintings in the illustrative, representational, urban, lowbrow, comic, pop art style. Please enjoy my corner of the internet, and follow me on instagram for live updates."} />
        </About_Container>
      </div>
    </section>
  );
};

export default About;
