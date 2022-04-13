import React from 'react';
import Banner from '../Banner/Banner'
import ExtraBanner from '../Banner/ExtraBanner';
import HeroSection from '../HeroSection/HeroSection';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeroSection></HeroSection>
            <ExtraBanner></ExtraBanner>
        </div>
    );
};

export default Home;