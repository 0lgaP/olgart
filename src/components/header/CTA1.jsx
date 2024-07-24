import React from "react";
import Resume from "../../assets/CV Olga Perron.pdf";
import "./header.css";
import { BsInstagram } from "react-icons/bs";

const CTA1 = () => {
  return (
    <div className="cta__container">
      <div className="cta">
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

export default CTA1;
