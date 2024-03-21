import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Drivers() {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    if (formData.length === 0) {
      axios.get('http://localhost:9092/delivery/getall')
        .then(response => {
          console.log(response.data); 
          setFormData(response.data);
          setIsLoading(false); 
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false); // Set loading to false on error
          console.error('Error fetching data:', error);
        });
    }
  }, [formData.length]);
  
  return (
    <>
      
        <div className='users-container'>
          <h2 style={{marginLeft: "40%", fontFamily: "cursive"}}>Delivery Drivers List</h2> <br/>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(formData) && formData.map((user) => (
                <tr key={user.eId}>
                  <td>{user.eId}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phno}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && <div>Error: {error}</div>}
        </div>
    
    </>
  );
}

export default Drivers;
