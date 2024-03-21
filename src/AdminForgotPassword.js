import React, { useState } from 'react';
import axios from 'axios';
import "./AdminForgotPassword.css";
import { useNavigate } from 'react-router-dom';


const AdminForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9096/users/send-reset-email', { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setMessage('Email sent successfully. Check your email for reset instructions.');
        setSubmitClicked(true);
      } else {
        setMessage('Failed to send email. Please try again later.');
        setSubmitClicked(false); // Set submitClicked back to false
      }
    } catch (error) {
      setMessage('An error occurred while processing your request.');
      setSubmitClicked(false); // Set submitClicked back to false
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:9096/users/verify-otp', { email, otp }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setMessage('OTP verified successfully. You can now reset your password.');
        setOtpVerified(true);
      } else {
        setMessage('Invalid OTP. Please try again.');
        setOtpVerified(false); // Set otpVerified back to false
      }
    } catch (error) {
      setMessage('An error occurred while verifying OTP.');
      setOtpVerified(false); // Set otpVerified back to false
    }
  };

  const handleResetPassword = async () => {
    try {
      const newPassword = prompt('Enter your new password:');
      const confirmPassword = prompt('Confirm your new password:');
      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        await axios.post('http://localhost:9096/users/reset-password', {
          email,
          newPassword,
        });
        setMessage('Password updated successfully.');
        navigate('/Signup'); 
      } else {
        setMessage('Passwords do not match.');
      }
    } catch (error) {
      setMessage('An error occurred while updating your password.');
    }
  };
  

  return (
<div className='section-forgot'>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box-forgot">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="container-forgot">
          <div className="form-forgot">
            <form onSubmit={handleSubmit} style={{ marginRight: "60%" }}>
              <div className="inputBox">
                <label style={{ fontSize: "1.2rem", color: "black"}}>
                  Email: 
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='enter registered email'
                    required
                    style={{ width: "250%", height: "6vh", marginTop: "15%"}}
                  />
                </label>
                <div  onClick={onsubmit}>
                <input 
                className='btn btn-primary'
                type="submit" value="SendOtp" style={{ marginTop: "15%",marginLeft: "65%" }} />
              </div>
              </div>
            </form>
            {submitClicked && (
              <div >
                <label className="inputBox" style={{color: "black"}}>
                  Enter OTP:
                  <input type="text" value={otp} onChange={handleOtpChange} required />
                </label>
                <div onClick={handleVerifyOtp} >
                <input className='btn btn-primary'
                type="submit" value="VerifyOtp" style={{ marginTop: "2%",marginLeft: "25%", paddingLeft: "-20px"}} />
              </div>
              </div>
            )}
            <p style={{color: "whitesmoke"}}>{message}</p>
            {otpVerified && (
              <div className="inputBox" onClick={handleResetPassword}>
              <input 
              className='inputBox'
              type="submit" value="Reset Password" style={{ marginTop: "2%",marginLeft: "25%" }} />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
