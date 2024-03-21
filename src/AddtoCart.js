import React from 'react';
import { useCart } from 'react-use-cart';

const AddtoCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const gstRate = 0.18; 
  const restaurantFee = 10;
  const platformFee = 3;

  const calculateGST = (item) => item.price * gstRate * item.quantity;

  const totalGST = items.reduce((total, item) => total + calculateGST(item), 0);

  const totalRestaurantFee = restaurantFee * totalItems;

  const totalPlatformFee = platformFee;

  const finalTotal = cartTotal + totalGST + totalRestaurantFee + totalPlatformFee;

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>

          <ul className="list-group">
            {items.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img
                      src={item.img} // Assuming each item in Data has an img property
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxWidth: '80px' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <p>{item.title}</p>
                    <p>₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <h5>Total: ₹{cartTotal.toFixed(2)}</h5>
            <p>GST: ₹{totalGST.toFixed(2)}</p>
            <p>Restaurant Fee: ₹{totalRestaurantFee.toFixed(2)}</p>
            <p>Platform Fee: ₹{totalPlatformFee.toFixed(2)}</p>
            <h5>Final Total: ₹{finalTotal.toFixed(2)}</h5>
            <button className="btn btn-danger" onClick={() => emptyCart()}>
              Empty Cart
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AddtoCart;
