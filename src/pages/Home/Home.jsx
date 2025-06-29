import React, { useEffect } from 'react';
import Banner from '../../Sections/Banner/Banner';
import About from '../../Sections/About/About';
import Skills from '../../Sections/Skills/Skills';
import Projects from '../../Sections/Projects/Projects';
import Services from '../../Sections/Services/Services';
import Contact from '../../Sections/Contact/Contact';

const Home = () => {
    
     useEffect(() => {
      document.title = "Home";
    })
    return (
        <>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Services/>
        <Contact/>
        </>
    );
};

export default Home;