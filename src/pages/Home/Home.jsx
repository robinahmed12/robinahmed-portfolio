import React from "react";
import Banner from "../../Sections/Banner/Banner";
import About from "../../Sections/About/About";
import Skills from "../../Sections/Skills/Skills";
import Projects from "../../Sections/Projects/Projects";
import Services from "../../Sections/Services/Services";
import Contact from "../../Sections/Contact/Contact";

const Home = () => {
  // Set the page title directly
  React.useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
