// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment'; 
// import * as XLSX from 'xlsx';
// import { Link } from 'react-router-dom';

// const YourOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:8079/carts/orders')
//       .then(response => {
//         setOrders(response.data);
//         const sumOfCost = response.data.reduce((total, order) => total + order.totalSum, 0);
//         setTotalCost(sumOfCost);
//       })
//       .catch(error => {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(orders);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Orders");
//     XLSX.writeFile(wb, "orders.xlsx");
//   };

//   const filterOrders = () => {
//     let filteredOrders = [...orders];
//     if (selectedDate) {
//       filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM-DD') === selectedDate);
//     }
//     if (selectedMonth) {
//       filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM') === selectedMonth);
//     }
//     return filteredOrders;
//   };

//   const handleCancelOrder = (orderId) => {
//     // Implement cancel order logic here
//     console.log(`Cancel order with ID ${orderId}`);
//   };

//   const handleReorder = (orderId) => {
//     // Implement reorder logic here
//     console.log(`Reorder items from order with ID ${orderId}`);
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="sellingreport-container" >
//       <div style={{display: "flex"}}>
//         <div style={{marginLeft: "40%"}}>
//           <h1 className="heading" style={{fontSize: "2rem"}}>My Orders </h1> <br/>
//         </div>
//       </div>

//       <div className="filters" style={{display: "flex"}}>
//         <div style={{marginLeft: "10%"}}>
//           <label htmlFor="dateFilter">Filter by Date:</label>
//           <input type="date" id="dateFilter" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} /> <br/>
//         </div>
//         <div style={{marginLeft: "30%"}}>
//           <label htmlFor="monthFilter">Filter by Month:</label>
//           <input type="month" id="monthFilter" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} />
//         </div>
//       </div> <br/>
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
//             <th>Action</th> 
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
//               <td>
//                 <Link to="ReorderPage"><button onClick={() => handleReorder(order.orderId)} style={{borderRadius: "2rem"}}>Reorder</button></Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default YourOrders;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment'; 
// import * as XLSX from 'xlsx';
// import { Link, useNavigate } from 'react-router-dom';

// const YourOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8079/carts/orders')
//       .then(response => {
//         setOrders(response.data);
//         const sumOfCost = response.data.reduce((total, order) => total + order.totalSum, 0);
//         setTotalCost(sumOfCost);
//       })
//       .catch(error => {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(orders);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Orders");
//     XLSX.writeFile(wb, "orders.xlsx");
//   };

//   const filterOrders = () => {
//     let filteredOrders = [...orders];
//     if (selectedDate) {
//       filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM-DD') === selectedDate);
//     }
//     if (selectedMonth) {
//       filteredOrders = filteredOrders.filter(order => moment(order.orderbookingtime).format('YYYY-MM') === selectedMonth);
//     }
//     return filteredOrders;
//   };

//   const handleCancelOrder = (orderId) => {
//     console.log(`Cancel order with ID ${orderId}`);
//   };

//   const handleReorder = (orderId) => {
//     const order = orders.find(order => order.orderId === orderId);
//     if (order) {
//       navigate('/payment', { state: { order } });
//     }
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="sellingreport-container" >
//       <div style={{display: "flex"}}>
//         <div style={{marginLeft: "40%"}}>
//           <h1 className="heading" style={{fontSize: "2rem"}}>My Orders </h1> <br/>
//         </div>
//       </div>

//       <div className="filters" style={{display: "flex"}}>
//         <div style={{marginLeft: "10%"}}>
//           <label htmlFor="dateFilter">Filter by Date:</label>
//           <input type="date" id="dateFilter" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} /> <br/>
//         </div>
//         <div style={{marginLeft: "30%"}}>
//           <label htmlFor="monthFilter">Filter by Month:</label>
//           <input type="month" id="monthFilter" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} />
//         </div>
//       </div> <br/>
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
//             <th>Action</th> 
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
//               <td>
//                 <button onClick={() => handleReorder(order.orderId)} style={{borderRadius: "2rem"}}>Reorder</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default YourOrders;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; 
import * as XLSX from 'xlsx';
import { Link, useNavigate } from 'react-router-dom';

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isCancellable, setIsCancellable] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8079/carts/orders')
      .then(response => {
        setOrders(response.data);
        const sumOfCost = response.data.reduce((total, order) => total + order.totalSum, 0);
        setTotalCost(sumOfCost);

        const cancellableOrder = response.data.find(order => {
          const orderTime = moment(order.orderbookingtime);
          const currentTime = moment();
          return currentTime.diff(orderTime, 'minutes') <= 5;
        });
        setIsCancellable(!!cancellableOrder);
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

  const handleCancelOrder = (orderId) => {
    axios.put(`http://localhost:8079/carts/orders/${orderId}/cancel`)
      .then(response => {
        console.log(`Order with ID ${orderId} has been cancelled.`);
        // Update the order status in the state
        setOrders(prevOrders => prevOrders.map(order => {
          if (order.orderId === orderId) {
            return { ...order, orderStatus: 'cancelled' };
          }
          return order;
        }));
      })
      .catch(error => {
        console.error(`Error cancelling order with ID ${orderId}:`, error);
      });
  };
  

  const handleReorder = (orderId) => {
    const order = orders.find(order => order.orderId === orderId);
    if (order) {
      navigate('/payment', { state: { order } });
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sellingreport-container" >
      <div style={{display: "flex"}}>
        <div style={{marginLeft: "40%"}}>
          <h1 className="heading" style={{fontSize: "2rem"}}>My Orders </h1> <br/>
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
            <th>Total Cost</th>
            <th>Order Booking Time</th>
            <th>Action</th> 
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
    <td>{order.totalSum}</td>
    <td>{moment(order.orderbookingtime).format('YYYY-MM-DD HH:mm:ss')}</td>
    <td>
      {order.orderStatus === 'cancelled' ? (
        <button style={{borderRadius: "2rem"}}><span>Cancelled</span></button>
      ) : (
        isCancellable && moment().diff(moment(order.orderbookingtime), 'minutes') <= 5 ? (
          <button onClick={() => handleCancelOrder(order.orderId)} style={{ borderRadius: "2rem" }}>Cancel Order</button>
        ) : (
          <button onClick={() => handleReorder(order.orderId)} style={{ borderRadius: "2rem", backgroundColor: "green" }}>Reorder</button>
        )
      )}
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};

export default YourOrders;
