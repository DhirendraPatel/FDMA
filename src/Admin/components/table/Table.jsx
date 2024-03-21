// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import * as XLSX from 'xlsx';
// import "./table.scss";

// const List = () => {
//   const [formData, setFormData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedDish, setSelectedDish] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (formData.length === 0) {
//       axios
//         .get('http://localhost:8079/carts/orders')
//         .then((response) => {
//           setFormData(response.data);
//           setFilteredData(response.data.slice(-10));
//         })
//         .catch((error) => {
//           setError(error.message);
//           console.error('Error fetching data:', error);
//         });
//     }
//   }, [formData.length]);


//   const handleMonthChange = (event) => {
//     const selectedMonth = event.target.value;
//     setSelectedMonth(selectedMonth);
//     filterData(selectedMonth, selectedDish);
//   };

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);
//     filterData(selectedMonth, selectedDate); // Pass selectedDate instead of selectedDish
//   };
  

//   const handleDishChange = (event) => {
//     const selectedDish = event.target.value;
//     setSelectedDish(selectedDish);
//     filterData(selectedMonth, selectedDish);
//   };

//   const [totalcost, setTotalCost] = useState(0); // State for storing the total cost

// const filterData = (month, date, dish) => {
//   let filtered = formData;
//   if (month) {
//     filtered = filtered.filter(
//       (item) => moment(item.lastUpdate).format('MM') === month
//     );
//   }
//   if (date) {
//     filtered = filtered.filter(
//       (item) => moment(item.lastUpdate).format('YYYY-MM-DD') === date
//     );
//   }

//   if (dish) {
//     filtered = filtered.filter((item) =>
//       item.dishes.toLowerCase().includes(dish.toLowerCase())
//     );
//   }

//   const sumOfCost = filtered.reduce((total, item) => total + item.cost, 0);

//   setFilteredData(filtered);
//   setTotalCost(sumOfCost); 
// };

  
//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(formData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'SellingReports');
//     XLSX.writeFile(workbook, 'SellingReports.xlsx');
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }



//   const totalCost = filteredData.reduce((total, user) => total + user.cost, 0);

//     return(
//         <div className="sellingreport-container">
  

// <table className="table table-bordered">
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
//           {
//         filteredData.map((user, i) => (
//             <tr key={i}>
//               <td>{i + 1}</td>
//               <td>{user.orderId}</td>
//               <td>{user.orderStatus}</td>
//               <td>{user.paymentStatus}</td>
//               <td>{user.userId}</td>
//               <td>{user.totalSum}</td>
//               <td>{moment(user.orderbookingtime).format('YYYY-MM-DD HH:mm:ss')}</td>
//             </tr>
//           ))}
//           <tr>
//             <td colSpan="5"></td>
//             <td>Total Cost:</td>
//             <td>{totalCost}</td>
//           </tr>
//         </tbody>
//       </table>
//         </div>
//     );
// };
  
// export default List;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as XLSX from 'xlsx';
import "./table.scss";

const List = () => {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [error, setError] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (formData.length === 0) {
      axios
        .get('http://localhost:8079/carts/orders')
        .then((response) => {
          setFormData(response.data);
          setFilteredData(response.data.slice(-10)); // Initialize filteredData with the last 10 items
        })
        .catch((error) => {
          setError(error.message);
          console.error('Error fetching data:', error);
        });
    }
  }, [formData.length]);

  useEffect(() => {
    // Recalculate totalCost whenever filteredData changes
    const sumOfCost = filteredData.reduce((total, item) => total + parseFloat(item.totalSum), 0);
    setTotalCost(sumOfCost);
  }, [filteredData]);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    filterData(selectedMonth, selectedDish);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    filterData(selectedMonth, selectedDate); // Pass selectedDate instead of selectedDish
  };
  
  const handleDishChange = (event) => {
    const selectedDish = event.target.value;
    setSelectedDish(selectedDish);
    filterData(selectedMonth, selectedDish);
  };

  const filterData = (month, date, dish) => {
    let filtered = formData;
    if (month) {
      filtered = filtered.filter(
        (item) => moment(item.lastUpdate).format('MM') === month
      );
    }
    if (date) {
      filtered = filtered.filter(
        (item) => moment(item.lastUpdate).format('YYYY-MM-DD') === date
      );
    }
    if (dish) {
      filtered = filtered.filter((item) =>
        item.dishes.toLowerCase().includes(dish.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };
  
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(formData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SellingReports');
    XLSX.writeFile(workbook, 'SellingReports.xlsx');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sellingreport-container">
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
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.orderId}</td>
              <td>{user.orderStatus}</td>
              <td>{user.paymentStatus}</td>
              <td>{user.userId}</td>
              <td>{parseFloat(user.totalSum)}</td>
              <td>{moment(user.orderbookingtime).format('YYYY-MM-DD HH:mm:ss')}</td>
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

export default List;

