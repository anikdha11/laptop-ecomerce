import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner grid  lg:grid-cols-2  grid-cols-2 lg:gap-24 content-center'>
            <div className=''>
                <p className='text-2xl text-sky-400/100'>Creating a fetures Now!</p>
                <h1 className='text-5xl text-white'>Best Laptops!</h1>
                <p className=' my-2 text-white'>Our extensive collection of <br /> men’s and women’s!</p>
                <button className="text-3xl font-semibold px-6 py-2 text-white rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                    Shop
                </button>
            </div>
            <div className=''>
            <p className='text-3xl text-white mb-20' >Great deals <br /> every weekends!</p>
            <hr style={{width:'15%',padding:'0.1rem',border:'1px solid blue',backgroundColor:'blue'}} className="mx-auto" />
            <h1 className='text-5xl font-bold text-white mt-8'>From $699</h1>
            </div>
        </div>
    );
};

export default Banner;