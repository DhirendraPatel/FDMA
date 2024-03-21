// Modal.js
import React, { useState } from 'react';
import "./Modal.css"

const Modal = ({ product, updateProduct, closeModal, showModal }) => {
  const [updatedName, setUpdatedName] = useState(product.name); 
  const [updatedPrice, setUpdatedPrice] = useState(product.price);
  const [updatedDescription, setUpdatedDescription] = useState(product.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: updatedName,
      price: updatedPrice,
      description: updatedDescription
    };
    updateProduct(updatedProduct);
  };

  

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label> <br/>
            <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} style={{width: "80%"}}/>
          </div>
          <div>
            <label>Price:</label> <br/>
            <input type="number" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)} style={{width: "80%"}}/>
          </div>
          <div>
            <label>Description:</label> <br/>
            <textarea value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} style={{width: "80%",height: "10vh"}}/>
          </div>
          
          <button type="submit">Update</button>
        </form>
        
      </div>
    </div>
  );
};

export default Modal;
