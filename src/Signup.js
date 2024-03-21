import React from 'react';
import "./Signup.css";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phno: '',
    pwd: '',
    confirmpwd: '',   
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); 
  };



  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:9091/users/signup', formData);
        alert('You have been successfully registered.');
        setFormData({
          userName: '',
          email: '',
          phno: '',
          pwd: '',
          confirmpwd: '',
        });
        setErrors({});
        navigate('/Signin'); 
      } catch (error) {
        console.error('Error occurred:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  const validateForm = (data) => {
    let errors = {};

    if (!data.userName) {    
        errors.userName = "fullname is required";   
    }    
    else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.userName))) {    
        errors.userName = "fullname is not valid (exp: abc abc)";  
    }    

    if (!data.email) {    
      errors.email = "email is required";
  }    
  else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {    
      errors.email = "email is not valid";    
  }    

    if (!data.phno) {    
        errors.phno = "Phone number is required.";    
    }    
    else {    
        if (!(/^(0|91)?[6-9][0-9]{9}$/.test(data.phno))) {    
            errors.phno = "Invalid phone number.";    
        }    
    }    

    if (!data.pwd) {    
        errors.pwd = "password is required";    
    }    
    else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.pwd))) {    
        errors.pwd = "7 to 15 characters at least one numeric digit and a special character";    
    }   
    
    if (!data.confirmpwd) {    
        errors.confirmpwd = "confirmpassword is required";    
    }    
    else if (data.pwd !== data.confirmpwd) {    
        errors.confirmpwd = "password and confirm password are not same";    
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
    <section className='section-signup'>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box-signup">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="container-signup" id="signup-form" style={{marginRight: "30%"}}>
          <div className="form-signup" >
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input type="text" placeholder="username" 
                value={formData.userName} name="userName"
                onChange={handleChange}/>
                {errors.userName && <p style={{color: "red"}}>{errors.userName}</p>}
              </div>
              <div className="inputBox">
                <input type="text" placeholder="email" 
                value={formData.email} name="email"
                onChange={handleChange}/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
              </div>
              <div className="inputBox">
                <input type="text" placeholder="phonenumber" 
                name="phno"    
                onChange={handleChange}
                value={formData.phno}    
                />
                {errors.phno && <p style={{color: "red"}}>{errors.phno}</p>}           
              </div>
              <div className="inputBox">
                <input type="password" placeholder="password" 
                name="pwd"    
                value={formData.pwd}    
                onChange={handleChange}/>
                {errors.pwd && <p style={{color: "red"}}>{errors.pwd}</p>}       
              </div>
              <div className="inputBox">
                <input type="password" placeholder="confirm password" 
                name="confirmpwd"    
                value={formData.confirmpwd}    
                onChange={handleChange}/>
                {errors.confirmpwd && <p style={{color: "red"}}>{errors.confirmpwd}</p>}       
              </div>
              <div className="inputBox" onClick={onsubmit}>
                <input type="submit" value="Signup" />
              </div>
            <p className="forget-signup"> Already have an account ?<Link to="/Signin" style={{color: "blue"}}><a href="#"> Signin </a></Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
