import React, { lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Public from "./components/Publications/Public";


const App = () => {
  const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

  return (
    <>
      <Header />
      <Public />
      <Services />
      <Footer />
    </>
  );
};

export default App;

// <Suspense fallback={"..."}>
//   <Portfolio />
// </Suspense>