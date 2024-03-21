import React, { useState } from 'react';
import './CantactForm.css';
import bgImage from '../../../assets/pizza.jpeg';

const CantactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name) {    
        errors.name = "fullname is required";   
    }    
    else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.name))) {    
        errors.name = "fullname is not valid (exp: abc abc)";  
    }  

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form data:", formData);
      // Perform form submission here
    } else {
      // Form has validation errors, set errors state
      setErrors(validationErrors);
    }
  };

  return (
    <div className='section'>
      <div className='container grid-container contact-content'>
        <div>
          <h1 className='heading-secondary'>
            get in <span>touch</span>
          </h1>

          <p>We're committed to providing exceptional service and ensuring your experience with us is nothing short of extraordinary. <span className='special-word'>Don't hesitate to reach out;</span> we're here to make your dining experience memorable!</p>

          <img src={bgImage} alt="get in touch" />
          <p>Prefer to communicate via email? Shoot us a message through Contact Form, and we'll get back to you as soon as possible.</p>
          <p>Stay connected with us on social media platforms like <span className='special-word'>Facebook, Instagram, and Twitter.</span> Get updates on special promotions, events, and more.</p>
          <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        </div>

        <div>
          <h1 className='heading-secondary'>
            Mail <span>us</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className='form-field name-email'>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <div className='form-field'>
              <div>
                <label>Subject</label>
                <input
                  type="text"
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='form-field'>
              <div>
                <label>Message</label>
                <textarea
                  type="text"
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CantactForm;
