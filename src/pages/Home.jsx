import React from 'react';
import Bannar from '../components/Bannar';
import CallToAction from '../components/CallToAction';
import AboutUS from '../components/AboutUS';
import FrequentlyAsk from '../components/FrequentlyAsk';

const Home = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-900'>
           <Bannar></Bannar>
           <CallToAction></CallToAction>
           <AboutUS></AboutUS>
           <FrequentlyAsk></FrequentlyAsk>
        </div>
    );
};

export default Home;