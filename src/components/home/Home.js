import React from 'react';
import Hero from "../Hero/Hero";
import About from "../about/about";
import Choose from "../Choose/Choose";
import Servises from "../Servises/servises";
import Feedback from "../Feedback/Feedback";
import Consultation from "../Consultation/Consultation";

const Home = () => {
    return (
        <div>
    <Hero/>
    <About/>
    <Choose/>
    <Servises/>
    <Feedback/>
    <Consultation/>
        </div>
    );
};

export default Home;