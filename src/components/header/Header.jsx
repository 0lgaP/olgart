import React from "react";
import "./header.css";
import CTA from "./CTA";
import About from "../about/About";


const Header = () => {
  return (
    <header>
      <br></br>
      <div id="home" className="container header__container">
        
        <h5>Alien Tarot Reader & Toronto Artist</h5>
      <div className="space"></div>
        <h1>Alien Toronto</h1>
        <CTA />
        <About />
      </div>
    </header>
  );
};

export default Header;
