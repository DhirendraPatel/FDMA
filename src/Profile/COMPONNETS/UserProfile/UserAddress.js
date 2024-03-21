import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserAddress.css';

const YourAddress = ({ userId }) => {
    const [address, setAddress] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedAddress, setEditedAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = 2; // Replace with the actual user ID
                const response = await axios.get(`http://localhost:8091/api/users/${userId}`);

                console.log('Data from API:', response.data);

                // Extract address from the response
                const userAddress = response.data.address;
                setAddress(userAddress);
                setEditedAddress(userAddress);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const validateAddress = (address) => {
        // Add your validation logic here
        // For example, check if the address is not empty
        return address.trim() !== '';
    };

    const handleSaveChanges = async () => {
        try {
            // Validate the address
            if (!validateAddress(editedAddress)) {
                toast.error('Address cannot be empty!', {
                    hideProgressBar: true,
                });
                return;
            }

            const userId = 2; // Replace with the actual user ID
            await axios.put(`http://localhost:8091/api/users/${userId}`, { address: editedAddress });

            toast.success('Address updated successfully!', {
                hideProgressBar: true,
            });

            setIsEditing(false);
            setAddress(editedAddress);
        } catch (error) {
            console.error('Error updating address:', error);
        }
    };

    return (
        <div className="container-user-address">
            <h1>Your Address</h1>
            <div className="address-container-user-address">
                <strong>Address:</strong>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedAddress}
                            onChange={(e) => setEditedAddress(e.target.value)}
                        />
                        <button onClick={handleSaveChanges}>Save Changes</button>
                    </>
                ) : (
                    <>
                        <div className="address-text-user-address">{address}</div>
                        <button onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default YourAddress;


