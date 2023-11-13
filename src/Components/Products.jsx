import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))

    },[])

    console.log(products);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                products.map((product)=><ProductsCard key={product.id} product={product}></ProductsCard>)

            }
            
        </div>
    );
};

export default Products;