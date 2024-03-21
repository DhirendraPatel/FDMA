// ReorderPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const ReorderPage = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8079/carts/orders/${orderId}`);
        setOrderDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handleReorder = async () => {
    // Implement reorder logic here
    console.log(`Reorder items from order with ID ${orderId}`);
    // Redirect the user to another page after reordering, or perform any necessary actions
  };

  const handleFurtherProcessing = () => {
    // Implement further processing logic here
    console.log('Performing further processing...');
    // Redirect the user to another page for further processing, or perform any necessary actions
    history.push('/further-processing');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Reorder Items</h2>
      {orderDetails && (
        <div>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Order Status: {orderDetails.orderStatus}</p>
          <p>Total Cost: {orderDetails.totalSum}</p>
          <p>User ID: {orderDetails.userId}</p>
          <p>Order Booking Time: {orderDetails.orderbookingtime}</p>
          <button onClick={handleReorder}>Reorder</button>
          <button onClick={handleFurtherProcessing}>Further Processing</button>
        </div>
      )}
    </div>
  );
};

export default ReorderPage;
