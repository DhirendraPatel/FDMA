import React, { createContext, useState } from 'react';

// Create a new context
export const CartContext = createContext();

const CartContextProvider = (props) => {
  // Define cart state and setter function
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Provide the cart state and functions to components consuming this context
  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
