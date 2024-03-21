import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = () => {
    const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8079/carts/itemsWithOrderIds');
      setCartItems(response.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.subtotal}</td>
              <td>{item.orderId}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
