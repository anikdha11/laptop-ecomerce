import React from 'react';
import "./Banner.css"

const ExtraBanner = () => {
    return (
        <div style={{height:'450px'}} className=' banner-2 container mx-auto  flex flex-row justify-center lg:justify-end mb-8 py-4'>
            <div className=' basis-1/3  my-auto text-justify '>
            <h1 className='text-xl text-blue-800 font-semibold py-5  hidden lg:block'>ALL NEW TREND TABLETSS</h1>
                <h1 className='lg:text-6xl text-4xl font-bold text-white mb-4'>Top rated <br />
                    tablets!</h1>
                <p className='text-xl text-white font-semibold my-5 hidden lg:block'> Doing it all, in all new ways.</p>
                <button className="text-3xl font-semibold px-16 py-4 text-white rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                    Shop
                </button>
            </div>
        </div>
    );
};

export default ExtraBanner;