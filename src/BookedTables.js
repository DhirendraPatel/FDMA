import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BookedTable.css"

const BookedTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await axios.get('http://localhost:8078/table/tables'); // Adjust URL as per your backend API
      setTables(response.data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  return (
    <div>
      <h1>Booked Tables</h1>
      <table className="table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Booking Id</th>
            <th>Date</th>
            <th>Time</th>
            <th>Number of Persons</th>
            <th>Email</th>
            <th>Table No.</th>
            <th>Booking Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.bookingId}</td>
              <td>{table.date}</td>
              <td>{table.time}</td>
              <td>{table.numberOfPersons}</td>
              <td>{table.email}</td>
              <td>{table.subtable}</td>
              <td>{table.bookingDateTime}</td>
              <td>{table.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedTables;
