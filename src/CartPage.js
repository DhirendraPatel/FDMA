// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./CartPage.css";

// const CartPage = ({ cart, onIncrease, onDecrease, onCheckout, onClose, isOpen }) => {
//   const selectedProducts = cart.filter(item => item.quantity > 0);

//   const calculateTotalCost = () => {
//     return selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   return (
//     <div className={`cart-page ${isOpen ? 'open' : 'closed'}`}>
//       <div className="cart-page-content">
//         <h2>Shopping Cart</h2>
//         <div className="cart-items">
//           {selectedProducts.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={`data:image/jpeg;base64,${item.image}`} alt="" className="cart-item-image" style={{width: "25%"}}/>
//               <div className="cart-item-details" style={{marginLeft: "5%"}}>
//                 <div>{item.name}</div>
//                 <div>Price: Rs {item.afterdiscountprice}</div>
//                 <div>Quantity: {item.quantity}</div>
//                 <div>
//                   <button onClick={() => onIncrease(item)}>+</button>
//                   <button onClick={() => onDecrease(item)}>-</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart-total">Total: Rs {calculateTotalCost()}</div>
//         <Link to="Payment"><button onClick={onCheckout} style={{borderRadius: "2rem"}}>Checkout</button></Link>
//         <button onClick={onClose} style={{borderRadius: "2rem"}}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartPage.css';


const Cart = ({ cart, onIncrease, onDecrease, onClose }) => {
  const [orderId, setOrderId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponAmount, setCouponAmount] = useState(0);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const selectedProducts = cart.filter(item => item.quantity > 0);
  const gstRate = 0.18;
  const deliveryCharge = 50; 
  const couponDiscount = 30; 
  const gst = 0.18; // Assign a value to gst variable


  const calculateSubtotal = () => {
    return selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateGST = () => {
    return calculateSubtotal() * gstRate;
  };

  const calculateTotalCost = () => {
    let totalCost = calculateSubtotal() + calculateGST() + deliveryCharge;
    if (couponApplied) {
      totalCost -= couponAmount;
    }
    return totalCost;
  };

  const handleApplyCoupon = () => {
    setCouponApplied(true);
    setCouponAmount(couponDiscount);
  };

  const handleCheckout = () => {
    const cartItemsWithDetails = selectedProducts.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
      // Include GST and delivery charges in each cart item
      gst: calculateGST(),
      deliveryCharges: deliveryCharge,
      // Add any other fields required by the server
    }));
  
    // Ensure that GST and delivery charges are passed as query parameters
    const queryString = `gst=${calculateGST()}&deliveryCharges=${deliveryCharge}`;
    
    if (!userId) {
      console.error('User ID is not available');
      return;
    }
  
    axios.post(`http://localhost:8079/carts/items/${userId}?${queryString}`, cartItemsWithDetails)
      .then(response => {
        console.log('Items added to cart successfully:', response.data);
        const orderId = response.data.orderId;
        console.log('Received Order ID:', orderId);
        setOrderId(orderId);
        localStorage.setItem('orderId', orderId);
        toast.success(`Received Order ID: ${orderId}`, {
          position: "bottom-right",
          marginTop: "30%",
          autoClose: 15000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        setTimeout(() => {
          window.location.assign('/Address');
        }, 15000);
      })
      .catch(error => {
        console.error('Error adding items to cart:', error);
        toast.error('Error adding items to cart', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  
  
  

  return (
    <>
      <div className="cart-overlay">
        <div className="cart-page">
          <h2>Shopping Cart</h2>
          <div className="cart-items">
            {selectedProducts.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={`data:image/jpeg;base64,${item.image}`} alt="" className="cart-item-image" style={{width: "35%"}}/>
                <div className="cart-item-details" style={{marginLeft: "10%"}}>
                  <div>{item.name}</div>
                  <div>Price: Rs {item.price}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>
                    <button onClick={() => onIncrease(item)}>+</button>
                    <button onClick={() => onDecrease(item)}>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div>Subtotal: <span style={{marginLeft: "26%", fontWeight: "bolder"}}>Rs {calculateSubtotal()}</span></div>
            <div>GST (18%): <span style={{marginLeft: "23%", fontWeight: "bolder"}}>Rs {calculateGST().toFixed(2)}</span></div>
            <div>Delivery Charges: <span style={{marginLeft: "4.8%", fontWeight: "bolder"}}>Rs {deliveryCharge}</span></div>
            
            <div>Total: <span style={{marginLeft: "34.6%", fontWeight: "bolder"}}>Rs {calculateTotalCost().toFixed(2)}</span></div>
          </div>

          <div className="cart-buttons">
            <button onClick={handleCheckout} style={{borderRadius: "2rem"}}>Checkout</button>
            <button onClick={onClose} style={{borderRadius: "2rem"}}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
