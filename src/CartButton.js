
import React from 'react';
import { useCart } from 'react-use-cart';

const CartButton = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default CartButton;
