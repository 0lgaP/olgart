import React from "react";
import Resume from "../../assets/CV Olga Perron.pdf";
import "./CTA.css";
import { BsInstagram } from "react-icons/bs";
import Flip from "./Flip";

/* Assests */
import olga from "../../assets/bluehair.png"; /* change cartoon */
import olga_head from "../../assets/olga_head.png"; /* change photo */


const CTA = () => {
  return (
    <div className="cta__container">
      <div className="cta">
      
          <Flip one={olga} two={olga_head} alt={""}/>
      
        <a href={Resume} download className="btn">
          Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </div>
      <div className="cta">
        <a
          href="https://www.instagram.com/alientoronto/"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab Instagram"
        >
          <BsInstagram className="header__socials" />
        </a>

      </div>
    </div>
  );
};

export default CTA;