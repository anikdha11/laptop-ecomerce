import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://rocky-hamlet-86574.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-bold text-violet-500 mb-8 mt-8'>Shop Best Sellers</h1>
            <div className='flex flex-row flex-wrap basis-56 justify-center'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    > </Product>)
                }
            </div>
        </div>
    );
};

export default Products;