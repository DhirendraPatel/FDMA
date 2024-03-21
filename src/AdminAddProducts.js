import React, { useState } from "react";
import axios from "axios";
import "./AdminProduct.css";

export default function AdminAddProducts({ closeModal }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [vegetarian, setVegetarian] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('vegetarian', vegetarian);

    try {
      const response = await axios.post('http://localhost:8081/addP', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Error adding product');
    }
  };

  return (
    <div className="add-product-modal" style={{ display: "block" }}>
      <div className="add-product-modal-content">
        <span className="add-product-close" onClick={closeModal}>&times;</span>
        <h1 style={{ fontSize: "2rem", fontFamily: "cursive" }}>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input className="add-product-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Price:</label>
            <input className="add-product-input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div>
            <label>Category:</label>
            <input className="add-product-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea className="add-product-input" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <label>Image:</label>
              <input className="add-product-input" type="file" onChange={(e) => setFile(e.target.files[0])} accept="image/*" required />
            </div>
            <div style={{ marginTop: "5%" }}>
              <label>Vegetarian:</label>
              <input className="add-product-checkbox" type="checkbox" checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} />
            </div>
          </div>
          <button className="add-product-button" type="submit">Add Product</button>
        </form>
        {message && <div className="add-product-message">{message}</div>}
      </div>
    </div>
  );
}
