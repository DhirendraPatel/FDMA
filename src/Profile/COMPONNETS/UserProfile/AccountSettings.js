// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Alert } from 'react-bootstrap';
// import "./AccountSettings.css";

// const AccountSettings = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//           throw new Error('User ID not found in localStorage');
//         }
//         const response = await axios.get(`http://localhost:9091/users/user/${userId}`);
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <Container className="account-container">
//       {loading && <p className="loading-message">Loading...</p>}
//       {error && <Alert variant="danger" className="error-message">{error}</Alert>}
//       {userData && (
//         <div className="user-profile-container">
//           <h1 style={{marginLeft: "-3%"}}>User Details</h1>
//           <p>User ID <span style={{marginLeft: "9%"}}>{userData.userId}</span></p>
//           <p>Name    <span style={{marginLeft: "10%"}}>{userData.userName}</span></p>
//           <p>Email   <span style={{marginLeft: "10.4%"}}>{userData.email}</span></p>
//           <p>Phone No <span style={{marginLeft: "5%"}}>{userData.phno}</span></p>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default AccountSettings;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Alert, Form, Button } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
// import "./AccountSettings.css";

// const AccountSettings = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editedUserData, setEditedUserData] = useState({
//     userName: '',
//     email: '',
//     phno: ''
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//           throw new Error('User ID not found in localStorage');
//         }
//         const response = await axios.get(`http://localhost:9091/users/user/${userId}`);
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with user data
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         throw new Error('User ID not found in localStorage');
//       }
//       const response = await axios.put(`http://localhost:9091/users/${userId}`, editedUserData);
//       // Optionally, handle success response
//       console.log('User updated successfully:', response.data);
//       setUserData(editedUserData); // Update displayed user data
//       toast.success('User updated successfully'); // Display success toast
//     } catch (error) {
//       console.error('Error updating user:', error);
//       // Optionally, handle error
//       toast.error('Error updating user');
//     }
//   };

//   return (
//     <Container className="account-container">
//       {loading && <p className="loading-message">Loading...</p>}
//       {error && <Alert variant="danger" className="error-message">{error}</Alert>}
//       {userData && (
//         <div className="user-profile-container">
//           <h1 style={{marginLeft: "-3%"}}>User Details</h1>
//           <p>User ID <span style={{marginLeft: "9%"}}>{userData.userId}</span></p>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Enter name" 
//                 name="userName" 
//                 value={editedUserData.userName} 
//                 onChange={handleChange} 
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Enter email" 
//                 name="email" 
//                 value={editedUserData.email} 
//                 onChange={handleChange} 
//               />
//             </Form.Group>
//             <Form.Group controlId="formPhno">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 placeholder="Enter phone number" 
//                 name="phno" 
//                 value={editedUserData.phno} 
//                 onChange={handleChange} 
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Update User
//             </Button>
//           </Form>
//         </div>
//       )}
//       <ToastContainer /> 
//     </Container>
//   );
// };

// export default AccountSettings;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Alert, Form, Button } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./AccountSettings.css";

// const AccountSettings = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editedUserData, setEditedUserData] = useState({
//     userName: '',
//     email: '',
//     phno: ''
//   });
//   const [isEditing, setIsEditing] = useState(false); 

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//           throw new Error('User ID not found in localStorage');
//         }
//         const response = await axios.get(`http://localhost:9091/users/user/${userId}`);
//         setUserData(response.data);
//         setEditedUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         throw new Error('User ID not found in localStorage');
//       }
//       const response = await axios.put(`http://localhost:9091/users/${userId}`, editedUserData);
//       console.log('User updated successfully:', response.data);
//       setUserData(editedUserData);
//       toast.success('User updated successfully');
//       setIsEditing(false); // Disable editing mode after successful update
//     } catch (error) {
//       console.error('Error updating user:', error);
//       toast.error('Error updating user');
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode when edit button is clicked
//   };

//   return (
//     <Container className="account-container">
//       {loading && <p className="loading-message">Loading...</p>}
//       {error && <Alert variant="danger" className="error-message">{error}</Alert>}
//       {userData && (
//         <div className="user-profile-container">
//           <h1 style={{marginLeft: "-3%"}}>User Details</h1>
//           <p style={{marginLeft: "70%"}}>User ID: <span style={{marginLeft: "3%"}}>{userData.userId}</span></p> <br/>
//           {isEditing ? (
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label> <br/>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Enter name" 
//                   name="userName" 
//                   value={editedUserData.userName} 
//                   onChange={handleChange} 
//                 />
//               </Form.Group>
//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email address</Form.Label> <br/>
//                 <Form.Control 
//                   type="email" 
//                   placeholder="Enter email" 
//                   name="email" 
//                   value={editedUserData.email} 
//                   onChange={handleChange} 
//                 />
//               </Form.Group>
//               <Form.Group controlId="formPhno">
//                 <Form.Label>Phone Number</Form.Label> <br/>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Enter phone number" 
//                   name="phno" 
//                   value={editedUserData.phno} 
//                   onChange={handleChange} 
//                 />
//               </Form.Group> <br/>
//               <Button variant="primary" type="submit">
//                 Update User
//               </Button>
//             </Form>
//           ) : (
//             <div>
//               <p>Name: {userData.userName}</p>
//               <p>Email: {userData.email}</p>
//               <p>Phone Number: {userData.phno}</p>
//             </div>
//           )}
//           {!isEditing && (
//             <Button variant="info" onClick={handleEdit}>Edit</Button>
//           )}
//         </div>
//       )}
//       <ToastContainer />
//     </Container>
//   );
// };

// export default AccountSettings;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Alert, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AccountSettings.css";
import { Link, NavLink } from 'react-router-dom';

const AccountSettings = () => {
  const [click, setClick] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editedUserData, setEditedUserData] = useState({
    userName: '',
    email: '',
    phno: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('User ID not found in localStorage');
        }
        const response = await axios.get(`http://localhost:9091/users/user/${userId}`);
        setUserData(response.data);
        setEditedUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID not found in localStorage');
      }

      if (!validateName(editedUserData.userName.trim())) {
        toast.error('Name must be in format (abc abc)', { hideProgressBar: true });
        return;
      }

      if (!validatePhoneNumber(editedUserData.phno)) {
        toast.error('Invalid phone number*', { hideProgressBar: true });
        return;
      }

      if (!validateEmail(editedUserData.email)) {
        toast.error('Invalid email*', { hideProgressBar: true });
        return;
      }

      const response = await axios.put(`http://localhost:9091/users/${userId}`, editedUserData);
      console.log('User updated successfully:', response.data);
      setUserData(editedUserData); 
      toast.success('User updated successfully');
      setIsEditing(false); 
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[6-9]\d{9}$/; 
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/; 
    return regex.test(name);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container className="account-container">
      {loading && <p className="loading-message">Loading...</p>}
      {error && <Alert variant="danger" className="error-message">{error}</Alert>}
      {userData && (
        <div className="user-profile-container">
          <div style={{display: "flex"}}>
          <h1 style={{marginLeft: "30%", fontSize: "2rem"}}>User Details</h1> 
          <button style={{ borderRadius: "2rem", marginLeft: '14%', width: "15%", height: "7vh", paddingBottom: "3px"}}>
              <ul onClick={handleClick}>
                <NavLink className="nav-link" to="/" style={{textDecoration: "none", color: "white", fontSize: "1.3rem", textAlign: "center"}}>
                  Logout
                </NavLink>
              </ul>
            </button>
            </div><br/>
          <div style={{display: "flex"}}>
          <div>
          <p style={{marginLeft: "0%", marginRight: "-70%", color: "#dc3545"}}>Created At: <span style={{marginLeft: "3%"}}>{userData.createdAt}</span></p> <br/>
          </div>
          <div>
          <p style={{marginLeft: "70%", marginRight: "-150%", color: "#dc3545"}}>User ID: <span style={{marginLeft: "3%"}}>{userData.userId}</span></p> <br/>
          </div>
          </div>
          {isEditing ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label> <br/>
                <Form.Control 
                  type="text" 
                  placeholder="Enter name" 
                  name="userName" 
                  value={editedUserData.userName} 
                  onChange={handleChange} 
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label> <br/>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  name="email" 
                  value={editedUserData.email} 
                  onChange={handleChange} 
                />
              </Form.Group>
              <Form.Group controlId="formPhno">
                <Form.Label>Phone Number</Form.Label> <br/>
                <Form.Control 
                  type="text" 
                  placeholder="Enter phone number" 
                  name="phno" 
                  value={editedUserData.phno} 
                  onChange={handleChange} 
                />
              </Form.Group> <br/>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          ) : (
            <div>
              <p>Name: {userData.userName}</p>
              <p>Email: {userData.email}</p>
              <p>Phone Number: {userData.phno}</p>
            </div>
          )}
          {!isEditing && (
            <Button variant="info" onClick={handleEdit} style={{borderRadius: "2rem"}}>Edit</Button>
          )}
        </div>
      )}
      <ToastContainer />
    </Container>
  );
};

export default AccountSettings;
