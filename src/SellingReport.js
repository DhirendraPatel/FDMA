import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SellingReport.css";
import moment from 'moment'; 
import * as XLSX from 'xlsx';
import OrderDetails from './OrderDetails'; // Import OrderDetails component

const SellingReport = () => {
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8079/carts/orders')
      .then(response => {
        setOrders(response.data);
        const sumOfCost = response.data.reduce((total, order) => total + order.totalSum, 0);
        setTotalCost(sumOfCost);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(orders);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "orders.xlsx");
  };

  const filterOrders = () => {
    let filteredOrders = [...orders];
    if (selectedDate) {
      filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM-DD') === selectedDate);
    }
    if (selectedMonth) {
      filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM') === selectedMonth);
    }
    return filteredOrders;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sellingreport-container" >
      <div style={{display: "flex"}}>
      <div style={{marginLeft: "40%"}}>
      <h1 className="heading" style={{fontSize: "2.3rem"}}>Selling report</h1> <br/>
      </div>
      <div>
      <button onClick={exportToExcel} style={{marginLeft: "83.5%", marginRight: "-150%", marginTop: "10%"}}>Export to Excel</button> <br/> <br/>
      </div>
      </div>

      <div className="filters" style={{display: "flex"}}>
        <div style={{marginLeft: "10%"}}>
        <label htmlFor="dateFilter">Filter by Date:</label>
        <input type="date" id="dateFilter" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} /> <br/>
        </div>
        <div style={{marginLeft: "30%"}}>
        <label htmlFor="monthFilter">Filter by Month:</label>
        <input type="month" id="monthFilter" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} />
      </div>
      </div> <br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>Order ID</th>
            <th>Order Status</th>
            <th>Payment Status</th>
            <th>User ID</th>
            <th>Transaction ID</th>
            <th>Total Cost</th>
            <th>Order Booking Time</th>
          </tr>
        </thead>
        <tbody>
          {filterOrders().map((order, index) => (
            <tr key={order.orderId}>
              <td>{index + 1}</td>
              <td>{order.orderId}</td>
              <td>{order.orderStatus}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.userId}</td>
              <td>{order.transactionId}</td>
              <td>{order.totalSum}</td>
              <td>{moment(order.orderbookingtime).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4"></td>
            <td>Total Cost:</td>
            <td>{totalCost}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default SellingReport;
