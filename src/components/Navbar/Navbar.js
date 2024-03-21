
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa"; // Import FaUser icon
// import logo from "../../assets/logo.png";
// import "./Navbar.css";
// import DessertFood from "../../DessertFood";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
//     console.log("Item added to cart:", item);
//   };

//   return (
//     <div className="header">
//       <div className="container">
//         <div className="nav-bar">
//           <Link to="/AfterHome">
//             <div style={{ display: "flex" }}>
//               <div>
//                 <img src={logo} alt="logo" width={50} />
//               </div>
//               <div>
//                 <h1 style={{color: "white", fontSize: "1.9rem"}}>FOODIE</h1>
//               </div>
//             </div>
//           </Link>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             {/* <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/AfterHome">
//                 Home
//               </NavLink>
//             </li> */}
//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/menu">
//                 Menu
//               </NavLink>
//             </li>
//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/ViewOffers">
//                 Offers
//               </NavLink>
//             </li>

//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/BookTable">
//                 Book A Table
//               </NavLink>
//             </li>

//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/contact">
//                 Contact
//               </NavLink>
//             </li>
            
            

//             {/* <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/Cart">
//                 <FaShoppingCart size={20} style={{ color: "#fff" }} />
//               </NavLink>
//             </li> */}
            
//             <li onClick={handleClick}>
//               <NavLink className="nav-link" to="/UserProfile">
//                 <FaUser size={20} style={{ color: "#fff" }} />
//               </NavLink>
//             </li>

//             <button style={{borderRadius: "2rem"}}><li onClick={handleClick}>
//               <NavLink className="nav-link" to="/">
//                 Logout
//               </NavLink>
//             </li>
//             </button>
//           </ul>

          

//           {/* Hamburger menu */}
//           <div className="hamburger" onClick={handleClick}>
//             {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="nav-bar">
          <Link to="/AfterHome">
            <div style={{ display: "flex" }}>
              <div>
                <img src={logo} alt="logo" width={50} />
              </div>
              <div>
                <h1 style={{ color: "white", fontSize: "1.9rem" }}>FOODIE</h1>
              </div>
            </div>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/ViewOffers">
                Offers
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/BookTable">
                Book A Table
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/Takeaway">
                Take Away
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/UserProfile">
                <FaUser size={20} style={{ color: "#fff" }} />
              </NavLink>
            </li>
            <li style={{paddingTop: "5px"}}>
              {userId && (
                <span style={{ color: "#dc3545", marginLeft: "10px",fontWeight: "bolder" }}>User ID: {userId}</span>
              )}
            </li>
            
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
