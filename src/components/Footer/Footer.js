import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const handleReply = (e) => {
    e.preventDefault(); 
    const recipientEmail = 'hr@anarghyacommunicationscom.in';
    const subject = 'Regarding Your Feedback';
    const body = 'Dear customer,\n\nWe appreciate your feedback and would like to address your concerns.\n\nSincerely,\nYour Company';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>FOODIE</h3>
            <p>"We're here to bring deliciousness right to your doorstep. <br/> Order now and let the feasting begin!"</p>
          </div>

          <div className="footer-grid-item" style={{marginLeft: "20%"}}>
            <h3>Quick Links</h3>
            <Link to="/AfterHome"><p style={{marginTop: "3%"}}>Home</p></Link>
            <Link to="/About"><p>About Us</p></Link>
            <Link to="/Contact"><p>Contact Us</p></Link>
            <Link to="/Menu"><p>Services</p></Link>
          </div>

          <div className="footer-grid-item" style={{marginLeft: "-20%"}}>
            <h3>Have a Question ?</h3>
            <p>1202&1215A, 3rd Floor, Regus</p>
            <p>SL Jubilee, Rd No:36, Jublee Hills</p>
            <p>+91-040-6793 2204</p> <br/>
            <a href="#" className="text-white" onClick={handleReply}>
              hr@anarghyacommunicationscom.in
            </a>
          </div>

          <div className="footer-grid-item">
            <iframe
              width="200"
              height="150"
              src="https://www.google.com/maps/place/Regus+-+Hyderabad,+Jubilee+Hills/@17.4293016,78.4074517,17z/data=!3m2!4b1!5s0x3bcb9136d0d1ec57:0x2708c1c43a6e5b35!4m6!3m5!1s0x3bcb9136803f0a3d:0xfb8568429bd0eeb6!8m2!3d17.4292965!4d78.4100266!16s%2Fg%2F11bzzyfj3q?entry=ttu">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
