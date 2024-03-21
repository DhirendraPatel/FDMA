import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./User.css";
import moment from 'moment';

function UserDatewise() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every minute
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9091/users/getall');
      setUsersData(response.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  const getCurrentDayUsers = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    return usersData.filter(user => moment(user.createdAt).format('YYYY-MM-DD') === currentDate);
  };

  const renderUsers = () => {
    const currentDayUsers = getCurrentDayUsers();
    let srno = 1; 


    return (
      <tbody>
        {currentDayUsers.map(user => (
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
    );
  };

  return (
    <div className='users-container'>
      <h2 style={{marginLeft: "35%", fontFamily: "cursive"}}>Users for {moment().format('MMMM DD, YYYY')}</h2> <br/>
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
        {renderUsers()}
      </table>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default UserDatewise;
