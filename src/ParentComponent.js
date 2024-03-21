import React, { useState } from 'react';
import ViewOffers from './ViewOffers';
import CartPage from './CartPage';

const ParentComponent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true); // Open the cart when adding an item
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    if (updatedCartItems.length === 0) {
      setIsCartOpen(false); // Close the cart when removing the last item
    }
  };

  return (
    <div>
      {!isCartOpen && <ViewOffers handleAddToCart={handleAddToCart} />}
      
      {isCartOpen && (
        <CartPage 
          cartItems={cartItems} 
          handleRemoveFromCart={handleRemoveFromCart} 
          onClose={() => setIsCartOpen(false)} // Close the cart when onClose is triggered
        />
      )}
    </div>
  );
};

export default ParentComponent;
