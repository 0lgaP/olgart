import React from "react";
import "./services.css";
import { ServicesList } from './services.tsx';
import { MFTU, Probing, Private, Book } from "./resume";
import alien from '../../assets/Bodyshot phone.png'

const Services = () => {
  return (
    <section id="workexperience">
      <br></br>
      <br></br>
      <h2>Readings</h2>

      <div className="container services__container">
        <ServicesList role={MFTU} />
        <ServicesList role={Probing} />
        <ServicesList role={Private} />
        <ServicesList role={Book} />
      </div>

    </section>
  );
};

export default Services;
