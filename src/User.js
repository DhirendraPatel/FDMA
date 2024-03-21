import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./User.css";

function User() {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);

  let srno = 1; 

  useEffect(() => {
    if (formData.length === 0) {
      axios.get('http://localhost:9091/users/getall')
        .then(response => {
          console.log(response.data); 
          setFormData(response.data);
        })
        .catch(error => {
          setError(error.message);
          console.error('Error fetching data:', error);
        });
    }
  }, [formData.length]);
  
  return (
    <div className='users-container'>
      <h2 style={{marginLeft: "40%", fontFamily: "cursive"}}>All Users</h2> <br/>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(formData) && formData.map((user) => (
            <tr key={user.eId}>
              <td>{srno++}</td> 
              <td>{user.userId}</td> 
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
  );
}

export default User;
