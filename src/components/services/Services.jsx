import React from "react";
import "./services.css";
import { ServicesList } from './services.tsx';
import { MFTU, Probing, Private } from "./resume";

const Services = () => {
  return (
    <section id="workexperience">
      <h2>Readings</h2>

      <div className="container services__container">
        <ServicesList role={MFTU} />
        <ServicesList role={Probing} />
        <ServicesList role={Private} />
      </div>
    </section>
  );
};

export default Services;
