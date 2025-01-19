import React from 'react';
import Bannar from '../components/Bannar';
import CallToAction from '../components/CallToAction';
import AboutUS from '../components/AboutUS';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <CallToAction></CallToAction>
           <AboutUS></AboutUS>
        </div>
    );
};

export default Home;