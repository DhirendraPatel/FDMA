import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ViewProducts.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/listProduct');
      console.log("All products response:", response.data);
      setProducts(response.data); // Update state with fetched products
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
            <span>{product.name}</span> - Rs: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
