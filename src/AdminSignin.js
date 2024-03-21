import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./AdminSignin.css";
import { useEffect } from "react";


export default function AdminSignin() {
  const [formData, setFormData] = useState({
    phno: "",
    pwd: "",
  });
  const [errors, setErrors] = useState({});
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
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:9096/users/login", {
          phno: formData.phno,
          pwd: formData.pwd,
        });
        if (response.status === 200) {
          alert("Login successful!");
          navigate("/Home"); 
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.log("Error occurred", error);
        alert("Invalid Credentials");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.phno) {
      errors.phno = "Phone number is required.";
    } else if (!/^(0|91)?[6-9][0-9]{9}$/.test(data.phno)) {
      errors.phno = "Invalid phone number.";
    }

    if (!data.pwd) {
      errors.pwd = "Password is required";
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.pwd)) {
      errors.pwd = "Password must be 7 to 15 characters with at least one numeric digit and a special character";
    }

    return errors;
  };


  useEffect(() => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.classList.add('slide-in');
    }
  }, []);

  

  return (
    <section className="section-admin">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box-admin">
        <div className="square" style={{ "--i": 0 }}></div>
        <div className="square" style={{ "--i": 1 }}></div>
        <div className="square" style={{ "--i": 2 }}></div>
        <div className="square" style={{ "--i": 3 }}></div>
        <div className="square" style={{ "--i": 4 }}></div>
        <div className="container-admin" id="signup-form" style={{ marginLeft: "-80%" }}>
          <div className="form-admin">
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
                  {errors.phno && <p style={{ color: "red" }}>{errors.phno}</p>}
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    placeholder="password"
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                  />
                  {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
                </div>

                <div className="inputBox">
                  <input type="submit" value="Signin" />
                </div>
                <p style={{color: "whitesmoke"}}>
                  <Link to="/AdminForgotPassword">Forgot Password</Link>
                </p>{" "}
                <br />
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
