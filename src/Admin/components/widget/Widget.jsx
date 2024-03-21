// import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

// const Widget = ({ type }) => {
//   const [userCount, setUserCount] = useState(0); 

//   useEffect(() => {
//    fetchUserCount();
//   }, []);

//   const fetchUserCount = () => {
//     fetch("https://your-api-url/users/count") 
//       .then((response) => response.json())
//       .then((data) => setUserCount(data.count))
//       .catch((error) => console.error("Error fetching user count:", error));
//   };
//   let data;

//   switch (type) {
//     case "user":
//       data = {
//         title: "USERS",
//         isMoney: false,
//         link: (
//           <Link to="/UserDatewise">See New users</Link>
//         ),
//         icon: (
//           <PersonOutlinedIcon
//             className="icon"
//             style={{
//               color: "crimson",
//               backgroundColor: "rgba(255, 0, 0, 0.2)",
//             }}
//           />
//         ),
//       };
//       break;
//     case "order":
//       data = {
//         title: "ORDERS",
//         isMoney: false,
//         link: "View all orders",
//         icon: (
//           <ShoppingCartOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(218, 165, 32, 0.2)",
//               color: "goldenrod",
//             }}
//           />
//         ),
//       };
//       break;
//     case "earning":
//       data = {
//         title: "EARNINGS",
//         isMoney: true,
//         link: "View net earnings",
//         icon: (
//           <MonetizationOnOutlinedIcon
//             className="icon"
//             style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
//           />
//         ),
//       };
//       break;
//     case "balance":
//       data = {
//         title: "BALANCE",
//         isMoney: true,
//         link: "See details",
//         icon: (
//           <AccountBalanceWalletOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(128, 0, 128, 0.2)",
//               color: "purple",
//             }}
//           />
//         ),
//       };
//       break;
//     default:
//       break;
//   }

//   return (
//     <div className="widget">
//       <div className="left">
//         <span className="title">{data.title}</span>
//         <span className="counter">{userCount}</span> 
//         <span className="link">{data.link}</span>
//       </div>
//       <div className="right">
//         <div className="percentage positive">
//           <KeyboardArrowUpIcon />
//         </div>
//         {data.icon}
//       </div>
//     </div>
//   );
// };

// export default Widget;



// import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Widget = ({ type }) => {
//   const [userCount, setUserCount] = useState(0); 

//   useEffect(() => {
//     fetchUserCount();
//   }, []);

//   const fetchUserCount = () => {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     fetch(`http://localhost:9091/users/user-count?date=${today}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched user count:", data.count);
//         setUserCount(data.count);
//       })
//       .catch((error) => console.error("Error fetching user count:", error));
//   };
  
  

//   let data;

//   switch (type) {
//     case "user":
//       data = {
//         title: "USERS",
//         isMoney: false,
//         link: (
//           <Link to="/UserDatewise">See New users</Link>
//         ),
//         icon: (
//           <PersonOutlinedIcon
//             className="icon"
//             style={{
//               color: "crimson",
//               backgroundColor: "rgba(255, 0, 0, 0.2)",
//             }}
//           />
//         ),
//       };
//       break;
//     case "order":
//       data = {
//         title: "ORDERS",
//         isMoney: false,
//         link: (
//           <Link to="SellingReportDatewise">View Today's Orders</Link>
//         ),
//         icon: (
//           <ShoppingCartOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(218, 165, 32, 0.2)",
//               color: "goldenrod",
//             }}
//           />
//         ),
//       };
//       break;
//     case "earning":
//       data = {
//         title: "EARNINGS",
//         isMoney: true,
//         link: "View net earnings",
//         icon: (
//           <MonetizationOnOutlinedIcon
//             className="icon"
//             style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
//           />
//         ),
//       };
//       break;
//     case "balance":
//       data = {
//         title: "BALANCE",
//         isMoney: true,
//         link: "See details",
//         icon: (
//           <AccountBalanceWalletOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(128, 0, 128, 0.2)",
//               color: "purple",
//             }}
//           />
//         ),
//       };
//       break;
//     default:
//       break;
//   }

//   return (
//     <div className="widget">
//       <div className="left">
//         <span className="title">{data.title}</span>
//         <span className="counter">{userCount}</span> 
//         <span className="link">{data.link}</span>
//       </div>
//       <div className="right">
//         <div className="percentage positive">
//           <KeyboardArrowUpIcon />
//         </div>
//         {data.icon}
//       </div>
//     </div>
//   );
// };

// export default Widget;






import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Widget = ({ type }) => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    fetch(`http://localhost:9091/users/user-count?date=${today}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched user count:", data.count);
        setUserCount(data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  };

  let data;
  let widgetClass;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: <Link to="/UserDatewise">See New users</Link>,
        icon: <PersonOutlinedIcon className="icon" />,
      };
      widgetClass = "user-widget";
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: <Link to="SellingReportDatewise">View Today's Orders</Link>,
        icon: <ShoppingCartOutlinedIcon className="icon" />,
      };
      widgetClass = "order-widget";
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
      };
      widgetClass = "earning-widget";
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" />,
      };
      widgetClass = "balance-widget";
      break;
    default:
      break;
  }

  return (
    <div className={`widget ${widgetClass}`}>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{userCount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
