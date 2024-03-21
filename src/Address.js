// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Address.css'; 
// import Navbar from './components/Navbar/Navbar';

// export default function Address() {
//   const [formData, setFormData] = useState({
//     address: "",
//     house: "",
//     area: "",
//     landmark: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [userId, setUserId] = useState(null);
//   const [orderId, setOrderId] = useState(null); 


//   // useEffect(() => {
//   //   const storedUserId = localStorage.getItem('userId');
//   //   if (storedUserId) {
//   //     setUserId(storedUserId);
//   //   }
//   // }, []);

//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     const storedOrderId = localStorage.getItem('orderId'); // Retrieve orderId from localStorage
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//     if (storedOrderId) {
//       setOrderId(storedOrderId); // Set orderId in state
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:9094/address/save", {
//           address: formData.address,
//           house: formData.house,
//           area: formData.area,
//           landmark: formData.landmark,
//           userId: userId, 
//           orderId: orderId,
//         });
//         if (response.status === 200) {
//           // window.location.assign("/Payment"); 
//         } else {
//           alert("Invalid credentials");
//         }
//       } catch (error) {
//         console.log("Error occurred", error);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.address) {
//       errors.address = "Address is required.";
//     } else if (data.address.length < 5) {
//       errors.address = "Address should be at least 5 characters.";
//     } else if (!/^[a-zA-Z0-9\s,'-]*$/.test(data.address)) {
//       errors.address = "Invalid characters in the address.";
//     }
//     if (!data.house) {
//       errors.house = "House/Flat No is required.";
//     } else if (!/^[a-zA-Z0-9\s,'\/-]*$/.test(data.house)) {
//       errors.house = "Invalid characters in the House/Flat No.";
//     }
//     if (!data.area) {
//       errors.area = "Area is required.";
//     } else if (!/^[a-zA-Z\s,'-]*$/.test(data.area)) {
//       errors.area = "Invalid characters in the area.";
//     }
//     if (!data.landmark) {
//       errors.landmark = "Landmark is required.";
//     } else if (!/^[a-zA-Z]+$/.test(data.landmark)) {
//       errors.landmark = "Invalid characters in the landmark. Only letters are allowed.";
//     }
//     return errors;
//   };

//   return (
//     <>
//     <Navbar/> <br/> <br/> <br/> <br/>
//     <div className='address-container'>
//       <div className="address-card">
//         <h3 className='address-heading'>Delivery Location</h3>
//         <div className="address-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 placeholder="Enter address"
//                 name="address"
//                 onChange={handleChange}
//                 value={formData.address}
//               />
//               {errors.address && <p className="error-message">{errors.address}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="House">House / Flat No:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="House"
//                 placeholder="Enter House"
//                 name="house"
//                 value={formData.house}
//                 onChange={handleChange}
//               />
//               {errors.house && <p className="error-message">{errors.house}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Area">Area:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Area"
//                 placeholder="Enter Area"
//                 name="area"
//                 value={formData.area}
//                 onChange={handleChange}
//               />
//               {errors.area && <p className="error-message">{errors.area}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Landmark">Landmark:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Landmark"
//                 placeholder="Enter Landmark"
//                 name="landmark"
//                 value={formData.landmark}
//                 onChange={handleChange}
//               />
//               {errors.landmark && <p className="error-message">{errors.landmark}</p>}
//             </div>
//             <button type="submit" className="btn btn-warning">
//               <b>Save & Proceed</b>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Address.css'; 
// import Navbar from './components/Navbar/Navbar';

// export default function Address() {
//   const [formData, setFormData] = useState({
//     address: "",
//     house: "",
//     area: "",
//     landmark: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [userId, setUserId] = useState(null);
//   const [orderId, setOrderId] = useState(null); 

//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     const storedOrderId = localStorage.getItem('orderId'); // Retrieve orderId from localStorage
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//     if (storedOrderId) {
//       setOrderId(storedOrderId); // Set orderId in state
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:9094/address/save", {
//           address: formData.address,
//           house: formData.house,
//           area: formData.area,
//           landmark: formData.landmark,
//           userId: userId, 
//           orderId: orderId,
//         });
//         if (response.status === 200) {
//           window.location.assign("/Payment"); 
//         } else {
//           alert("Invalid credentials");
//         }
//       } catch (error) {
//         console.log("Error occurred", error);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.address) {
//       errors.address = "Address is required.";
//     } else if (data.address.length < 5) {
//       errors.address = "Address should be at least 5 characters.";
//     } else if (!/^[a-zA-Z0-9\s,'-]*$/.test(data.address)) {
//       errors.address = "Invalid characters in the address.";
//     }
//     if (!data.house) {
//       errors.house = "House/Flat No is required.";
//     } else if (!/^[a-zA-Z0-9\s,'\/-]*$/.test(data.house)) {
//       errors.house = "Invalid characters in the House/Flat No.";
//     }
//     if (!data.area) {
//       errors.area = "Area is required.";
//     } else if (!/^[a-zA-Z\s,'-]*$/.test(data.area)) {
//       errors.area = "Invalid characters in the area.";
//     }
//     if (!data.landmark) {
//       errors.landmark = "Landmark is required.";
//     } else if (!/^[a-zA-Z]+$/.test(data.landmark)) {
//       errors.landmark = "Invalid characters in the landmark. Only letters are allowed.";
//     }
//     return errors;
//   };

//   return (
//     <>
//     <Navbar/> <br/> <br/> <br/> <br/>
//     <div className='address-container'>
//       <div className="address-card">
//         <h3 className='address-heading'>Delivery Location</h3>
//         <div className="address-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 placeholder="Enter address"
//                 name="address"
//                 onChange={handleChange}
//                 value={formData.address}
//               />
//               {errors.address && <p className="error-message">{errors.address}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="House">House / Flat No:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="House"
//                 placeholder="Enter House"
//                 name="house"
//                 value={formData.house}
//                 onChange={handleChange}
//               />
//               {errors.house && <p className="error-message">{errors.house}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Area">Area:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Area"
//                 placeholder="Enter Area"
//                 name="area"
//                 value={formData.area}
//                 onChange={handleChange}
//               />
//               {errors.area && <p className="error-message">{errors.area}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Landmark">Landmark:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Landmark"
//                 placeholder="Enter Landmark"
//                 name="landmark"
//                 value={formData.landmark}
//                 onChange={handleChange}
//               />
//               {errors.landmark && <p className="error-message">{errors.landmark}</p>}
//             </div>
//             <button type="submit" className="btn btn-warning">
//               <b>Save & Proceed</b>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Address.css'; 
// import Navbar from './components/Navbar/Navbar';

// export default function Address() {
//   const [formData, setFormData] = useState({
//     address: "",
//     house: "",
//     area: "",
//     landmark: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [userId, setUserId] = useState(null);
//   const [orderId, setOrderId] = useState(null); 

//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     const storedOrderId = localStorage.getItem('orderId'); // Retrieve orderId from localStorage
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//     if (storedOrderId) {
//       setOrderId(storedOrderId); // Set orderId in state
//       fetchAddressByOrderId(storedOrderId); // Fetch address data when component mounts
//     }
//   }, []);

//   const fetchAddressByOrderId = async (orderId) => {
//     try {
//       const response = await axios.get(`http://localhost:9094/address/${orderId}`);
//       const addressData = response.data; // Assuming your backend returns the address data in JSON format
//       setFormData(addressData); // Set address data in form state
//     } catch (error) {
//       console.log("Error fetching address:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:9094/address/save", {
//           address: formData.address,
//           house: formData.house,
//           area: formData.area,
//           landmark: formData.landmark,
//           userId: userId, 
//           orderId: orderId,
//         });
//         if (response.status === 200) {
//           window.location.assign("/Payment"); 
//         } else {
//           alert("Invalid credentials");
//         }
//       } catch (error) {
//         console.log("Error occurred", error);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     // Validation logic
//     return errors;
//   };

//   return (
//     <>
//     <Navbar/> <br/> <br/> <br/> <br/>
//     <div className='address-container'>
//       <div className="address-card">
//         <h3 className='address-heading'>Delivery Location</h3>
//         <div className="address-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 placeholder="Enter address"
//                 name="address"
//                 onChange={handleChange}
//                 value={formData.address}
//               />
//               {errors.address && <p className="error-message">{errors.address}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="House">House / Flat No:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="House"
//                 placeholder="Enter House"
//                 name="house"
//                 value={formData.house}
//                 onChange={handleChange}
//               />
//               {errors.house && <p className="error-message">{errors.house}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Area">Area:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Area"
//                 placeholder="Enter Area"
//                 name="area"
//                 value={formData.area}
//                 onChange={handleChange}
//               />
//               {errors.area && <p className="error-message">{errors.area}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="Landmark">Landmark:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Landmark"
//                 placeholder="Enter Landmark"
//                 name="landmark"
//                 value={formData.landmark}
//                 onChange={handleChange}
//               />
//               {errors.landmark && <p className="error-message">{errors.landmark}</p>}
//             </div>
//             <button type="submit" className="btn btn-warning">
//               <b>Save & Proceed</b>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Address.css'; 
import Navbar from './components/Navbar/Navbar';

export default function Address() {
  const [formData, setFormData] = useState({
    address: "",
    house: "",
    area: "",
    landmark: "",
  });
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState(null);
  const [orderId, setOrderId] = useState(null); 

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedOrderId = localStorage.getItem('orderId'); // Retrieve orderId from localStorage
    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedOrderId) {
      setOrderId(storedOrderId); // Set orderId in state
      fetchAddressByOrderId(storedOrderId); // Fetch address data when component mounts
    }
  }, []);

  const fetchAddressByOrderId = async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:9094/address/${orderId}`);
      const addressData = response.data; // Assuming your backend returns the address data in JSON format
      setFormData(addressData); // Set address data in form state
    } catch (error) {
      console.log("Error fetching address:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:9094/address/save", {
          address: formData.address,
          house: formData.house,
          area: formData.area,
          landmark: formData.landmark,
          userId: userId, 
          orderId: orderId,
        });
        if (response.status === 200) {
          window.location.assign("/Payment"); 
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.log("Error occurred", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
  
    const addressRegex = /^[a-zA-Z0-9\s,.'-]+$/; 
    const houseRegex = /^[a-zA-Z0-9\s/-]+$/;
    const areaRegex = /^[a-zA-Z\s-]+$/; 
    const landmarkRegex = /^[a-zA-Z\s-]+$/; 
  
    if (!data.address) {
      errors.address = "Address is required";
    } else if (!addressRegex.test(data.address)) {
      errors.address = "Invalid address format";
    }
  
    if (!data.house) {
      errors.house = "House/Flat No. is required";
    } else if (!houseRegex.test(data.house)) {
      errors.house = "Invalid house/flat number format";
    }
  
    if (!data.area) {
      errors.area = "Area is required";
    } else if (!areaRegex.test(data.area)) {
      errors.area = "Invalid area format";
    }
  
    if (!data.landmark) {
      errors.landmark = "Landmark is required";
    } else if (!landmarkRegex.test(data.landmark)) {
      errors.landmark = "Invalid landmark format";
    }
  
    return errors;
  };
  

  return (
    <>
    <Navbar/> <br/> <br/> <br/> <br/>
    <div className='address-container'>
      <div className="address-card">
        <h3 className='address-heading'>Delivery Location</h3>
        <div className="address-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
                name="address"
                onChange={handleChange}
                value={formData.address}
              />
              {errors.address && <p className="error-message">{errors.address}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="House">House / Flat No:</label>
              <input
                type="text"
                className="form-control"
                id="House"
                placeholder="Enter House"
                name="house"
                value={formData.house}
                onChange={handleChange}
              />
              {errors.house && <p className="error-message">{errors.house}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="Area">Area:</label>
              <input
                type="text"
                className="form-control"
                id="Area"
                placeholder="Enter Area"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
              {errors.area && <p className="error-message">{errors.area}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="Landmark">Landmark:</label>
              <input
                type="text"
                className="form-control"
                id="Landmark"
                placeholder="Enter Landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
              {errors.landmark && <p className="error-message">{errors.landmark}</p>}
            </div>
            <button type="submit" className="btn btn-warning">
              <b>Save & Proceed</b>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
