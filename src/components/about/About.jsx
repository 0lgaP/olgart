import React from "react";
import './About_Container.css';

/* Components */
import Flip from './Flip'
import Bio from "./Bio";
import About_Container from "./About_Container";
import CTA from "./CTA";
import Title from "./Title";

/* Assests */
import olga from "../../assets/bluehair.png"; /* change cartoon */
import olga_head from "../../assets/olga_head.png"; /* change photo */



const About = () => {

  return (
    <section id="about">
      <div className="about__content">
        <Title />
        <CTA />
        <About_Container>
          <Bio />
        </About_Container>
      </div>
    </section>
  );
};

export default About;
