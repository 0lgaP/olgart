import React from "react";
import "./services.css";
import { ServicesList } from './services_alt.tsx';
import { MFTU, Probing, Book, Contact, Birthday } from "./resume";
import alien from '../../assets/Bodyshot phone.png'

const Services = () => {
  return (
    <section id="workexperience">
      <br></br>
      <br></br>
      <h2>Alien Tarot Reading Services</h2>

      <div className="container services__container">
        <ServicesList role={MFTU} />
        <ServicesList role={Probing} />

        <ServicesList role={Birthday} />
        <ServicesList role={Book} />
        <ServicesList role={Contact} />
      </div>

    </section>
  );
};

export default Services;
