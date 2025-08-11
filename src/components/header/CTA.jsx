import React from "react";
import "./header.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import EmailCopyComponent from "./Email";

const CTA = () => {
  return (
    <div className="cta__container">
      <div className="cta">
        <a
          href="https://www.instagram.com/alientoronto/"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab Instagram"
        >
          <BsInstagram className="header__socials" />
        </a>
        <a
          href="https://www.youtube.com/@alientoronto"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab YouTube"
        >
          <BsYoutube className="header__socials" />
        </a>
        <EmailCopyComponent />
        <a
          href="https://www.twitch.tv/alientoronto"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab Twitch"
        >
          <BsTwitch className="header__socials" />
        </a>
       
        
        

        
      </div>
    </div>
  );
};

export default CTA;
