import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
    return (
        <div className='container mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 mb-12 overflow-hidden'>
            <div style={{ height: '450px',width:'100%' }} className='hero-1 text-justify  mt-2 mx-auto '>
                <h1 className='text-3xl font-bold mt-2 text-gray-500'>Mac Desktops</h1>
               <p className='text-gray-600'> Quality products!</p>
            </div>
            <div style={{ height: '450px',width:'100%' }} className='hero-2 mt-2 text-white  mx-auto'>
               <h1 className='text-xl mt-2'> Up to 30%</h1>
               <h1 className='text-5xl font-bold'>Big Sale</h1>
                <h1 className='mt-2 font-medium'> Get new smartphone!</h1>

               
            </div>
            <div style={{ height: '450px',width:'100%' }} className='hero-3 mt-2 mx-auto'>
            <h1 className='text-3xl font-bold mt-2 text-gray-700'>Computers</h1>
            <h4 className='font-medium text-gray-600'>Limited time offer!</h4>         
            </div>
        </div>
    );
};

export default HeroSection;