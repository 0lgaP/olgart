import React, { lazy } from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Public from "./components/Publications/Public";
import VDay from "./components/Publications/VDay";




const App = () => {
  const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

  return (
    <>
      <Header />
      <VDay />
      <Services />
      <Public />
      <Footer />
    </>
  );
};

export default App;

