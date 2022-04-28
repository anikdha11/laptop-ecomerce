import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProducts = () => {
    const {id} = useParams();
    const [singleProduct,setSingleProduct]= useState({})

    useEffect(()=>{
        fetch(`https://rocky-hamlet-86574.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setSingleProduct(data)
            console.log(data)
            
        })
    },[id])
    return (
        <div className='pt-20'>
          <div className='grid grid-cols-2 gap-4 justify-items-center items-center'>
          <div >
            <img className='' src={singleProduct.img} alt="" />
            </div>
            <div className='text-justify px-3'>
            <h1>{singleProduct.name}</h1>
            <h1>{singleProduct.price}</h1>
            <p>The idea behind iMac has never wavered: to craft the ultimate desktop experience. The best display, paired with high-performance processors, graphics, and storage — all within </p>
            
            </div>
        
          </div>

        </div>
    );
};

export default SingleProducts;