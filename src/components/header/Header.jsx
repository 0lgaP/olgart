import React from "react";
import "./header.css";
import About from "../about/About";
import CTA from '../about/CTA'

const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>Alien Toronto Artist</h5>
        <h1>Olga Perron</h1>
        <CTA />
        <About />
      </div>
    </header>
  );
};

export default Header;
