import React from 'react';
import Banner from '../../Sections/Banner/Banner';
import About from '../../Sections/About/About';
import Skills from '../../Sections/Skills/Skills';
import Projects from '../../Sections/Projects/Projects';
import Services from '../../Sections/Services/Services';

const Home = () => {
    return (
        <>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Services/>
        </>
    );
};

export default Home;