import React from 'react';
import axios from 'axios';

const AddToCartButton = ({ productId, quantity }) => {
  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:8081/checkout', { productId, quantity });
      console.log('Item added to cart successfully:', response.data);
      // Handle success (e.g., display a success message)
    } catch (error) {
      if (error.response) {
        console.error('Server responded with error:', error.response.data);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
