import React from 'react';
import { Link } from 'react-router-dom';

const Product = (product) => {



  return (


    <Link to={`/product/${product?.product?._id}`}>  <div className=' w-52 p-5 text-center border mb-14'>
      <img className=' mx-auto' src={product?.product?.img} alt="" />
      <h4 className='font-semibold hover:text-violet-600 mb-4  hover:underline underline-offset-4'>{product?.product?.name}</h4> 
      <h3 className='text-xl font-bold text-gray-400 hover:text-sky-600'>{product?.product?.price}</h3> </div>
    </Link>

  );
};

export default Product;