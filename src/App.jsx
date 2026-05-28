import React, { lazy } from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Public from "./components/Publications/Public";
import Experience from "./components/experience/Experience";





const App = () => {


  return (
    <>
      <Header />
      <Services />
      <Public />
      <Experience />
      <Footer />
    </>
  );
};

export default App;

