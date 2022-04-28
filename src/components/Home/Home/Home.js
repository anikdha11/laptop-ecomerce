import React from 'react';
import Banner from '../Banner/Banner'
import ExtraBanner from '../Banner/ExtraBanner';
import HeroSection from '../HeroSection/HeroSection';
import Products from '../Products/Products/Products';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeroSection></HeroSection>
            <ExtraBanner></ExtraBanner>
            <Products></Products>
            
        </div>
    );
};

export default Home;