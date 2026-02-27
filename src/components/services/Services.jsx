import React from "react";
import "./services.css";
import { ServicesList } from './services_alt.tsx';
import { MFTU, Probing, Book, Contact, Birthday, Standup } from "./resume";
import alien from '../../assets/Bodyshot phone.png'

const Services = () => {
  return (
    <section id="workexperience">
      <br></br>
      <br></br>
      <h2>Alien Tarot Readings</h2>

      <div className="container services__container">
        <ServicesList role={MFTU} />
        <ServicesList role={Probing} />

        <ServicesList role={Standup} />

      </div>

    </section>
  );
};

export default Services;
