import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product=() => {
    const[products, setProducts] = useState([]);
    useEffect(() => {
        try
        {
            const getProducts = async () =>
            {
                const res=await fetch('https://dummyjson.com/products')
                const data=await res.json();
                console.log(data.products);
                setProducts(data.products);
            }
            getProducts();
        }catch(error)
        {
            console.log(error);
        }
    }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
            <div key={product.id}>
                <h1>Name:{product.title}</h1>
                <p>Price:{product.price}</p>
                <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
        ))}
      </ul>
     
        </div>
    
    
  )
}

export default Product
