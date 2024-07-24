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
          Howdy ya’ll, 
I am AlienToronto, an artist specializing in acrylic paintings which inspect the Toronto-coded similarities between mundane and cosmic. I'm looking to paint up your wall, garage or fence real nice! This summer I am looking to take my art to the public, and if you are here  score I'm nailing it so far!

          </p>
        </div>
    </section>
  );
};

export default About;
