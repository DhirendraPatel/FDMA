// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "./Signup.css";
// import { useEffect } from "react";


// export default function Signin() {
//   const [formData, setFormData] = useState({
//     phno: "",
//     pwd: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

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
//         const response = await axios.post("http://localhost:9091/users/login", {
//           phno: formData.phno,
//           pwd: formData.pwd,
//         });
//         if (response.status === 200) {
//           alert("Login successful!");
//         } else {
//           alert("Invalid credentials");
//         }
//       } catch (error) {
//         console.log("Error occurred", error);
//         alert("Invalid Credentials");
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};

//     if (!data.phno) {
//       errors.phno = "Phone number is required.";
//     } else if (!/^(0|91)?[6-9][0-9]{9}$/.test(data.phno)) {
//       errors.phno = "Invalid phone number.";
//     }

//     if (!data.pwd) {
//       errors.pwd = "Password is required";
//     } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.pwd)) {
//       errors.pwd = "Password must be 7 to 15 characters with at least one numeric digit and a special character";
//     }

//     return errors;
//   };


//   useEffect(() => {
//     const form = document.getElementById('signup-form');
//     if (form) {
//       form.classList.add('slide-in');
//     }
//   }, []);

  

//   return (
//     <>
//     <section className="section-signup">
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="box-signup">
//         <div className="square" style={{ "--i": 0 }}></div>
//         <div className="square" style={{ "--i": 1 }}></div>
//         <div className="square" style={{ "--i": 2 }}></div>
//         <div className="square" style={{ "--i": 3 }}></div>
//         <div className="square" style={{ "--i": 4 }}></div>
//         <Link to="BHome"><button style={{marginLeft: "-80%", borderRadius: "2rem", backgroundColor: "white", color: "black"}}>back</button></Link>

//         <div className="container-signup" id="signup-form" style={{ marginLeft: "-80%", marginTop: "10%"}}>

//           <div className="form-signup">
//             <div className="inputBox">
//               <h2 style={{ color: "black" }}>Signin Form</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="inputBox">
//                   <input
//                     type="text"
//                     placeholder="phonenumber"
//                     name="phno"
//                     onChange={handleChange}
//                     value={formData.phno}
//                   />
//                   {errors.phno && <p style={{ color: "red" }}>{errors.phno}</p>}
//                 </div>

//                 <div className="inputBox">
//                   <input
//                     type="password"
//                     placeholder="password"
//                     name="pwd"
//                     value={formData.pwd}
//                     onChange={handleChange}
//                   />
//                   {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
//                 </div>

//                 <div className="inputBox">
//                   <input type="submit" value="Signin" />
//                 </div>
//                 <p style={{color: "whitesmoke"}}>
//                   <Link to="/Forgotpassword">Forgot Password</Link>
//                 </p>{" "}
//                 <br />
//                 <p style={{color: "whitesmoke"}}>
//                   Don't have an account ? <Link to="/Signup" style={{color: "blue"}}>signup</Link>
//                 </p>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>

//   );
// }




import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Signin() {
  const [formData, setFormData] = useState({
    phno: "",
    pwd: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9091/users/login", formData);
      if (response.status === 200) {
        const { data } = response;
        console.log("Data received from login response:", data); 
        if (data) {
          localStorage.setItem("userId", data); 
          console.log("UserId after setting:", data); 
          alert("Login successful!");
          toast.success(`Welcome to ${data}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/AfterHome");
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("Error occurred", error);
      alert("Invalid Credentials");
    }
  };
  
  return (
    <>
      <section className="section-signup">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box-signup">
          <div className="square" style={{ "--i": 0 }}></div>
          <div className="square" style={{ "--i": 1 }}></div>
          <div className="square" style={{ "--i": 2 }}></div>
          <div className="square" style={{ "--i": 3 }}></div>
          <div className="square" style={{ "--i": 4 }}></div>

          <div className="container-signup" id="signup-form" style={{ marginLeft: "-80%", marginTop: "10%" }}>
            <div className="form-signup">
              <div className="inputBox">
                <h2 style={{ color: "black" }}>Signin Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="phonenumber"
                      name="phno"
                      onChange={handleChange}
                      value={formData.phno}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="password"
                      name="pwd"
                      value={formData.pwd}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputBox">
                    <input type="submit" value="Signin" />
                  </div>
                  <p style={{color: "whitesmoke"}}>
                   <Link to="/Forgotpassword">Forgot Password</Link>
                 </p>{" "}
                 <br />
                 <p style={{color: "whitesmoke"}}>
                   Don't have an account ? <Link to="/Signup" style={{color: "blue"}}>signup</Link>
                 </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </section>
    </>
  );
}
