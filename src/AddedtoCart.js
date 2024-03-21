import React from 'react';

const AddedtoCart = ({ product, onClose }) => {
  return (
    <div className="popup">
      <div>{product.name} added to cart!</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddedtoCart;
