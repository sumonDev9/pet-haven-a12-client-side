import React from 'react';
import Bannar from '../components/Bannar';
import CallToAction from '../components/CallToAction';
import AboutUS from '../components/AboutUS';
import FrequentlyAsk from '../components/FrequentlyAsk';
import Review from '../components/Review';
import PetCategory from '../components/PetCategory';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-900'>
           <Bannar></Bannar>
           <PetCategory></PetCategory>
           <CallToAction></CallToAction>
           <AboutUS></AboutUS>
           <FrequentlyAsk></FrequentlyAsk>
           <NewsLetter></NewsLetter>
           <Review></Review>
        </div>
    );
};

export default Home;