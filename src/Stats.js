// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Chart from 'chart.js/auto';
// import moment from 'moment';

// const Stats = () => {
//   const [formData, setFormData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:9090/api/displaysellingreport')
//       .then(response => {
//         setFormData(response.data);
//       })
//       .catch(error => {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (formData.length > 0) {
//       createCharts();
//     }
//   }, [formData]);

//   const createCharts = () => {
//     const januaryData = formData.filter(item => moment(item.lastUpdate).format('MM') === '01');
//     const daysInJanuary = Array.from({ length: 31 }, (_, i) => i + 1);
    
//     daysInJanuary.forEach(day => {
//       const dailyData = januaryData.filter(item => moment(item.lastUpdate).format('DD') === String(day));
//       const totalCosts = {};

//       dailyData.forEach(item => {
//         if (!totalCosts[item.dishes]) {
//           totalCosts[item.dishes] = item.cost;
//         } else {
//           totalCosts[item.dishes] += item.cost;
//         }
//       });

//       renderChart(day, totalCosts);
//     });
//   };

//   const renderChart = (day, data) => {
//     const ctx = document.getElementById(`myChart${day}`);
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: Object.keys(data),
//         datasets: [{
//           label: `Total Cost for ${moment().month(0).date(day).format('MMMM DD')}`,
//           data: Object.values(data),
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 style={{marginLeft: "40%"}}>Stats for January</h2> <br/>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
//           <div key={day} style={{ width: '300px', margin: '10px' }}>
//             <canvas id={`myChart${day}`} width="300" height="300"></canvas>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stats;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Chart from 'chart.js/auto';
// import moment from 'moment';

// const Stats = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:8079/carts/itemsWithOrderIds');
//       setCartItems(response.data);
//     } catch (error) {
//       setError(error.message);
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     createCharts();
//   }, [cartItems]);

//   const createCharts = () => {
//     if (cartItems.length === 0) return;

//     // Group cart items by item name and calculate total cost for each item
//     const itemStats = {};
//     cartItems.forEach(item => {
//       const { name, price, quantity } = item;
//       const subtotal = price * quantity;
//       if (!itemStats[name]) {
//         itemStats[name] = {
//           totalQuantity: quantity,
//           totalCost: subtotal
//         };
//       } else {
//         itemStats[name].totalQuantity += quantity;
//         itemStats[name].totalCost += subtotal;
//       }
//     });

//     // Prepare data for rendering charts
//     const labels = Object.keys(itemStats);
//     const totalCosts = labels.map(label => itemStats[label].totalCost);

//     // Render chart
//     renderChart(labels, totalCosts);
//   };

//   const renderChart = (labels, data) => {
//     const ctx = document.getElementById('myChart');
//     if (ctx) {
//       new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels,
//           datasets: [{
//             label: 'Total Cost by Item',
//             data,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     }
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 style={{ marginLeft: "40%" }}>Stats for the Year</h2> <br />
//       <div style={{ width: '600px', margin: '10px auto' }}>
//         <canvas id="myChart" width="600" height="400"></canvas>
//       </div>
//     </div>
//   );
// };

// export default Stats;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import moment from 'moment';

const Stats = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCartItems();
    const interval = setInterval(fetchCartItems, 60000); // Fetch data every minute
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8079/carts/itemsWithOrderIds');
      setCartItems(response.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      createCharts();
    }
  }, [cartItems]);

  const createCharts = () => {
    const daysInYear = 365; // Assuming a non-leap year
    const dataByDay = {};

    for (let day = 1; day <= daysInYear; day++) {
      const dailyData = cartItems.filter(item => moment(item.lastUpdate).dayOfYear() === day);

      dailyData.forEach(item => {
        const itemName = item.name;
        const itemCost = item.price * item.quantity;
        if (!dataByDay[day]) {
          dataByDay[day] = {};
        }
        if (!dataByDay[day][itemName]) {
          dataByDay[day][itemName] = itemCost;
        } else {
          dataByDay[day][itemName] += itemCost;
        }
      });

      // If no data for the day, set an empty object
      if (!dataByDay[day]) {
        dataByDay[day] = {};
      }
    }

    Object.keys(dataByDay).forEach(day => {
      renderChart(day, dataByDay[day]);
    });
  };

  const renderChart = (day, data) => {
    const ctx = document.getElementById(`myChart${day}`);
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [{
            label: `Total Cost for ${moment().dayOfYear(day).format('MMMM DD')}`,
            data: Object.values(data),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 style={{ marginLeft: "40%" }}>Stats for the Year</h2> <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from({ length: 365 }, (_, i) => i + 1).map(day => (
          <div key={day} style={{ width: '300px', margin: '10px' }}>
            <canvas id={`myChart${day}`} width="300" height="300"></canvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
