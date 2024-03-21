// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment'; 
// import * as XLSX from 'xlsx';
// import "./SellingReport.css";

// const SellingReportDatewise = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8079/carts/orders');
//       setOrders(response.data);
//       const sumOfCost = response.data.reduce((total, order) => total + order.totalSum, 0);
//       setTotalCost(sumOfCost);
//     } catch (error) {
//       setError(error.message);
//       console.error('Error fetching data:', error);
//     }
//   };

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(orders);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Orders");
//     XLSX.writeFile(wb, "orders.xlsx");
//   };

//   const filterOrders = () => {
//     let filteredOrders = [...orders];
//     const today = moment(selectedDate).startOf('day');
//     const tomorrow = moment(selectedDate).endOf('day');
//     filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).isBetween(today, tomorrow));
//     return filteredOrders;
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="sellingreport-container">
//       <h1 className="heading">Selling report for {moment(selectedDate).format('MMMM DD, YYYY')}</h1> <br/>
//       <div className="filters">
//         <button onClick={exportToExcel} style={{marginLeft: "42%"}}>Export to Excel</button>
//       </div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>S.NO.</th>
//             <th>Order ID</th>
//             <th>Order Status</th>
//             <th>Payment Status</th>
//             <th>User ID</th>
//             <th>Total Cost</th>
//             <th>Order Booking Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filterOrders().map((order, index) => (
//             <tr key={order.orderId}>
//               <td>{index + 1}</td>
//               <td>{order.orderId}</td>
//               <td>{order.orderStatus}</td>
//               <td>{order.paymentStatus}</td>
//               <td>{order.userId}</td>
//               <td>{order.totalSum}</td>
//               <td>{moment(order.orderbookingtime).format('YYYY-MM-DD HH:mm:ss')}</td>
//             </tr>
//           ))}
//           <tr>
//             <td colSpan="4"></td>
//             <td>Total Cost:</td>
//             <td>{totalCost}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SellingReportDatewise;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; 
import * as XLSX from 'xlsx';
import "./SellingReport.css";

const SellingReportDatewise = () => {
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredOrders = orders.filter(order => moment(order.orderbookingtime).isSame(selectedDate, 'day'));
    const sumOfCost = filteredOrders.reduce((total, order) => total + order.totalSum, 0);
    setTotalCost(sumOfCost);
  }, [orders, selectedDate]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8079/carts/orders');
      setOrders(response.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(orders);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "orders.xlsx");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sellingreport-container">
      <h1 className="heading">Selling report for {moment(selectedDate).format('MMMM DD, YYYY')}</h1> <br/>
      <div className="filters">
        <button onClick={exportToExcel} style={{marginLeft: "42%"}}>Export to Excel</button>
      </div>
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
          {orders.filter(order => moment(order.orderbookingtime).isSame(selectedDate, 'day')).map((order, index) => (
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
            <td colSpan="5"></td>
            <td>Total amount:</td>
            <td>{totalCost}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellingReportDatewise;
