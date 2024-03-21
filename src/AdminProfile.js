import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminProfile.css';

const AdminProfile = () => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAddress, setEditedAddress] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userId = 4; // Replace with the actual user ID
      const response = await axios.get(`http://localhost:8091/api/users/${userId}`);

      setUserData(response.data);

      const { name, number, email, address } = response.data;
      setEditedName(name);
      setEditedPhoneNumber(number);
      setEditedEmail(email);
      setEditedAddress(address);

      toast.success(`Welcome, ${name}! Your profile is loaded.`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = ({ target: { files } }) => {
    if (files?.length) {
      const { type } = files[0];
      if (type === 'image/png' || type === 'image/jpeg') {
        setFile(files[0]);
      } else {
        toast.error('Accept only png and jpeg image types are allowed*', {
          hideProgressBar: true,
        });
      }
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[6-9]\d{9}$/; // 10-digit phone number starting with 6, 7, 8, or 9
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z]+$/; // Alphabets only
    return regex.test(name);
  };

  const handleSaveChanges = async () => {
    try {
      // Validate input fields
      if (!validateName(editedName.trim())) {
        toast.error('Name must contain alphabets only*', { hideProgressBar: true });
        return;
      }

      if (!validatePhoneNumber(editedPhoneNumber)) {
        toast.error('Invalid phone number*', { hideProgressBar: true });
        return;
      }

      if (!validateEmail(editedEmail)) {
        toast.error('Invalid email*', { hideProgressBar: true });
        return;
      }

      const updatedUser = {
        ...userData,
        name: editedName,
        number: editedPhoneNumber,
        email: editedEmail,
        address: editedAddress,
      };

      const response = await axios.put(`http://localhost:8091/api/users/${userData.id}`, updatedUser);

      console.log('Response from server:', response.data);

      toast.success('Profile updated successfully!', {
        hideProgressBar: true,
      });

      setIsEditing(false);
      fetchData();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('File is required*', {
        hideProgressBar: true,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await axios.post(`http://localhost:8091/api/users/upload/${userData.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUserData((prevData) => ({
        ...prevData,
        profilePictureFileName: uploadResponse.data.url
      }));

      toast.success('Profile picture uploaded successfully!', {
        hideProgressBar: true,
      });

      setIsEditing(false);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleEditAddress = () => {
    setIsEditing(true);
  };

  const handleSaveAddress = async () => {
    try {
      // Validate the address
      if (!editedAddress.trim()) {
        toast.error('Address cannot be empty!', {
          hideProgressBar: true,
        });
        return;
      }

      const updatedUser = {
        ...userData,
        address: editedAddress,
      };

      await axios.put(`http://localhost:8091/api/users/${userData.id}`, updatedUser);

      toast.success('Address updated successfully!', {
        hideProgressBar: true,
      });

      setIsEditing(false);
      fetchData();
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return ( 
  <>
  <div className='admin-main'>
  <br/> 
    <div className="admin-profile-card">
      <h1 style={{fontSize: "2rem", marginLeft: "-5%"}}>Profile</h1>
      <div className="profile-details">
        {/* <div className="avatar-container" onClick={() => setIsEditing(true)}>
          
          
        </div> */}
        {/* <button className="upload-button" onClick={handleUpload} style={{ display: isEditing ? 'block' : 'none' }}>
          Upload Profile Picture
        </button> */}
        <div>
          <strong>Name:</strong>{' '}
          {isEditing ? (
            <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          ) : (
            <span>{editedName}</span>
          )}
        </div>
        <div>
          <strong>Phone Number:</strong>{' '}
          {isEditing ? (
            <input type="text" value={editedPhoneNumber} onChange={(e) => setEditedPhoneNumber(e.target.value)} />
          ) : (
            <span>{editedPhoneNumber}</span>
          )}
        </div>
        <div>
          <strong>Email:</strong>{' '}
          {isEditing ? (
            <input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
          ) : (
            <span>{editedEmail}</span>
          )}
        </div>
        {isEditing ? (
          <button className="save-changes-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
      <div className="address-container">
        <div>
          <strong>Address:</strong>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
              />
              <button onClick={handleSaveAddress}>Save Address</button>
            </>
          ) : (
            <>
              <div>{editedAddress}</div>
              <button onClick={handleEditAddress}>Edit Address</button>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
    </>
  );
};

export default AdminProfile;
