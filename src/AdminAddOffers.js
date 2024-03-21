import React, { useState } from 'react';
import axios from 'axios';

function AdminAddOffers() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [vegetarian, setVegetarian] = useState('');
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('category', category);
    formData.append('vegetarian', vegetarian);

    try {
      await axios.post('http://localhost:8085/addP', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product saved successfully');
    } catch (error) {
      alert('Error saving product');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount" required />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <select value={vegetarian} onChange={(e) => setVegetarian(e.target.value)} required>
          <option value="">Select</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        <input type="file" onChange={(e) => setFile1(e.target.files[0])} required />
        <input type="file" onChange={(e) => setFile2(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminAddOffers;