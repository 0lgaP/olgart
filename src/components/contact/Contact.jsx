import React from "react";
import "./contact.css";
import { Form } from "./Form";
import { SiGooglecalendar } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
         <br></br>
         <br></br>
      
      <div className="alien_footer__socials">
         <h2>Contact</h2>
         <br></br>
  
<div className="container contact__container">


        <a
          href="https://calendar.app.google/SJYYvKLcjEr2mqjL8"
          target="_blank"
          rel="noreferrer"
          aria-label="opens new tab to Google Calendar"
        >
          <SiGooglecalendar className="alien_header__socials" /> 
          <br></br>
          <p>Book an Alien Toronto Experiance using Google Calendar</p>
        </a>
        </div>
        <div className="container contact__container">
        <Form />
      </div>
      
      </div>
      <div classname="alien_header__socials">

     
      </div>
    </section>
  );
};

export default Contact;
