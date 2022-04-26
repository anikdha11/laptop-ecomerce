import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='pt-8'>
            <div className='banner grid grid-cols-2 lg:gap-24 content-center mx-auto '>
            <div className='my-auto'>
                <p className='text-2xl text-sky-400/100 hidden lg:block'>Creating a fetures Now!</p>
                <h1 className='text-5xl text-white lg:mb-0 mb-8'>Best Laptops!</h1>
                <p className=' my-2 text-white hidden lg:block'>Our extensive collection of <br /> men’s and women’s!</p>
                <button className="text-3xl font-semibold px-16 py-4 text-white rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                    Shop
                </button>
            </div>
            <div className='my-auto'>
            <p className='text-3xl text-white mb-20 hidden lg:block' >Great deals <br /> every weekends!</p>
            <hr style={{width:'100px',padding:'0.1rem',border:'1px solid blue',backgroundColor:'blue'}} className="mx-auto" />
            <h1 className='text-5xl font-bold text-white mt-8'>From $699</h1>
            </div>
            </div>
        </div>
    );
};

export default Banner;