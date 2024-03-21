// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Alert, ToastContainer } from 'react-bootstrap';
// import { toast } from 'react-toastify'; 
// import Navbar from './components/Navbar/Navbar';
// import 'react-toastify/dist/ReactToastify.css';
// import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// import { useEffect } from 'react';

// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [upiNumber, setUpiNumber] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [userData, setUserData] = useState(null); 
//   const [orderData, setOrderData] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [addressData, setAddressData] = useState(null); // State to hold address data

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const orderId = localStorage.getItem('orderId');
//         const response = await axios.get(`http://localhost:9094/address/address/${orderId}`);
//         setAddressData(response.data);
//       } catch (error) {
//         console.error('Error fetching address:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const userId = localStorage.getItem('userId');
//       const orderId = localStorage.getItem('orderId');

//       const paymentData = {
//         paymentMethod,
//         cardNumber,
//         upiNumber,
//         expirationDate,
//         cvv,
//         userId,
//         orderId,
//       };

//       const response = await axios.post('http://localhost:8090/payments/save', paymentData);
//       console.log(response.data);

//       const userResponse = await axios.get(`http://localhost:9091/users/user/${userId}`);
//       const orderResponse = await axios.get(`http://localhost:8079/carts/get/${orderId}`);
//       const productsResponse = await axios.get(`http://localhost:8079/carts/orders/${orderId}`);

//       setUserData(userResponse.data);
//       setOrderData(orderResponse.data);
//       setProducts(productsResponse.data);

//       setSuccess(true);
//       setLoading(false);
//       setError(null);
//       toast.success('Ordered successfully!');
//       toast.info(`Payment Method: ${paymentMethod === 'upi' ? 'UPI' : 'Card'}.`);
//     } catch (error) {
//       console.error(error);
//       setError('Payment failed. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className='bg-light p-3'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-6'>
//               <Container className='payment-container w-100'>
//                 <h2 className='payment-heading-center' style={{ color: 'black', marginLeft: "30%" }}>
//                   Payment Details
//                 </h2>
//                 <br />
//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group controlId='paymentMethod'>
//                     <Form.Label style={{ marginLeft: '30%', fontSize: "1.2rem" }}>Select Payment Method</Form.Label> <br/>
//                     <Form.Control
//                       as='select'
//                       value={paymentMethod}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       required
//                       style={{ marginLeft: '35%' }}>
//                       <option value='' disabled> <br/>
//                         Select Payment Method
//                       </option>
//                       <option value='credit_card' >Credit Card</option>
//                       <option value='debit_card'>Debit Card</option>
//                       <option value='upi'>UPI</option>
//                       <option value='razorpay'>Razorpay</option>
//                     </Form.Control>
//                   </Form.Group> <br/>
//                   {paymentMethod === 'upi' && (
//                     <Form.Group controlId='upiNumber'>
//                       <Form.Label style={{ marginLeft: '40%', fontSize: "1.2rem" }}>UPI Number</Form.Label> <br/>
//                       <Form.Control
//                         type='text'
//                         placeholder='Enter UPI Number'
//                         value={upiNumber}
//                         onChange={(e) => setUpiNumber(e.target.value)}
//                         required
//                         style={{ marginLeft: '35%' }}/>
//                     </Form.Group> 
//                   )}
//                   {paymentMethod !== 'upi' && (
//                     <>
//                       <Form.Group controlId='cardNumber'>
//                         <Form.Label style={{ marginLeft: '36%', fontSize: "1.2rem" }}>Card Number</Form.Label> <br/>
//                         <Form.Control
//                           type='text'
//                           placeholder='Enter card number'
//                           value={cardNumber}
//                           onChange={(e) => setCardNumber(e.target.value)}
//                           required
//                           style={{ marginLeft: '35%' }}/>
//                       </Form.Group>
//                       <Form.Group controlId='expirationDate'>
//                         <Form.Label style={{ marginLeft: '38%', fontSize: "1.2rem" }}>Expiration Date</Form.Label><br/>
//                         <Form.Control
//                           type='text'
//                           placeholder='MM/YY'
//                           value={expirationDate}
//                           onChange={(e) => setExpirationDate(e.target.value)}
//                           required
//                           style={{ marginLeft: '35%' }}/>
//                       </Form.Group>
//                       <Form.Group controlId='cvv'>
//                         <Form.Label style={{ marginLeft: '42%', fontSize: "1.2rem" }}>CVV</Form.Label> <br/>
//                         <Form.Control
//                           type='text'
//                           placeholder='Enter CVV'
//                           value={cvv}
//                           onChange={(e) => setCvv(e.target.value)}
//                           required
//                           style={{ marginLeft: '35%' }}/>
//                       </Form.Group>
//                     </>
//                   )} <br/>
//                   <div className='payment-heading-center'>
//                     <Button className='mt-4' variant='primary' type='submit' disabled={loading} style={{marginLeft: "35%"}}>
//                       {loading ? 'Processing...' : 'Submit Payment'} 
//                     </Button>
//                   </div> <br/>
//                   {error && <Alert variant='danger' style={{color: "red", marginLeft: "26%"}}>{error}</Alert>} {/* Display error alert */}
//                   {success && <Alert variant='success' style={{color: "green", marginLeft: "35%"}}>Payment successful!</Alert>} 
//                 </Form>
//               </Container>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//       {success && (
//         <PDFViewer style={{ width: '100%', height: '100vh' }}>
//           <Document>
//             <Page size="A4">
//               <View>
//                 <Text>User Details:</Text>
//                 <Text>User ID: {userData.userId}</Text>
//                 <Text>Name: {userData.userName}</Text>
//                 <Text>Email: {userData.email}</Text>
//                 <Text>Phone No.: {userData.phno}</Text>

//                 <Text>Order Details:</Text>
//                 <Text>Order ID: {orderData.orderId}</Text>
//                 {products.map((product, index) => (
//                   <View key={index}>
//                     <Text>Product {index + 1}:</Text>
//                     <Text>Name: {product.name}</Text>
//                     <Text>Price: {product.price}</Text>
//                     <Text>Offer: {product.offer}</Text>
//                     <Text>Total Price: {product.total}</Text>
//                   </View>
//                 ))}
//               {addressData && (
//                   <>
//                     <Text>Delivery Address:</Text>
//                     <Text>Address: {addressData.address}</Text>
//                     <Text>House/Flat No: {addressData.house}</Text>
//                     <Text>Area: {addressData.area}</Text>
//                     <Text>Landmark: {addressData.landmark}</Text>
//                   </>
//                 )}
//               </View>
//             </Page>
//           </Document>
//         </PDFViewer>
//       )}
//     </>
//   );
// };

// export default Payment;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify'; 
import Navbar from './components/Navbar/Navbar';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

// Define styles for PDF document
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [upiNumber, setUpiNumber] = useState(null);
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null); 
  const [orderData, setOrderData] = useState(null);
  const [products, setProducts] = useState([]);
  const [addressData, setAddressData] = useState(null); 
  const [transactionId, setTransactionId] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderId = localStorage.getItem('orderId');
        const response = await axios.get(`http://localhost:9094/address/address/${orderId}`);
        setAddressData(response.data);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };
    fetchData();
  }, []);



  const validateForm = () => {
    let errors = {};
  
    if (paymentMethod !== 'cash_on_delivery') {
      if (paymentMethod !== 'upi' && (!cardNumber || !/^\d{11}$/.test(cardNumber))) {
        errors.cardNumber = 'Card number must be 11 digits';
      }
  
      if (paymentMethod !== 'upi' && (!expirationDate || !/^\d{2}\/\d{4}$/.test(expirationDate))) {
        errors.expirationDate = 'Invalid expiration date format (MM/YYYY)';
      }
  
      if (paymentMethod !== 'upi' && (!cvv || !/^\d{3}$/.test(cvv))) {
        errors.cvv = 'CVV must be 3 digits';
      }
  
      if (paymentMethod === 'upi' && (!upiNumber || !/^\w+@\w+$/.test(upiNumber))) {
        errors.upiNumber = 'Invalid UPI number format';
      }
    }
  
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError('Please enter valid data');
      setLoading(false);
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      const orderId = localStorage.getItem('orderId');

      const paymentData = {
        paymentMethod,
        cardNumber,
        upiNumber,
        expirationDate,
        cvv,
        userId,
        orderId,
      };

      const response = await axios.post('http://localhost:8090/payments/save', paymentData);
      const transactionId = response.data.transactionId; // Extract transactionId from response
      console.log(transactionId);

      setTransactionId(transactionId);

      const userResponse = await axios.get(`http://localhost:9091/users/user/${userId}`);
      const orderResponse = await axios.get(`http://localhost:8079/carts/get/${orderId}`);
      const productsResponse = await axios.get(`http://localhost:8079/carts/orders/${orderId}`);

      setUserData(userResponse.data);
      setOrderData(orderResponse.data);
      setProducts(productsResponse.data);

      setSuccess(true);
      setLoading(false);
      setError(null);
      toast.success('Ordered successfully!');
      toast.info(`Payment Method: ${paymentMethod === 'upi' ? 'UPI' : 'Card'}.`);
      toast.success(`Received transaction ID: ${transactionId}`, {
        position: "bottom-right",
        marginTop: "30%",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  const handlePrintReceipt = () => {
    if (!addressData) {
      console.error("Address data is not available");
      return;
    }
    const pdf = new jsPDF();
  
    pdf.text('Payment Receipt', 80, 20);
    pdf.text(`User ID: ${userData.userId}`, 20, 30);
    pdf.text(`Name: ${userData.userName}`, 20, 40);
    pdf.text(`Email: ${userData.email}`, 20, 50);
    pdf.text(`Phone No.: ${userData.phno}`, 20, 60);
    pdf.text(`Order ID: ${orderData.orderId}`, 20, 70);
    pdf.text(`Transaction ID: ${orderData.transactionId}`, 20, 80);
    products.forEach((product, index) => {
      const y = 90 + (index * 50);
      pdf.text(`Product ${index + 1}:`, 20, y);
      pdf.text(`Name: ${product.name}`, 40, y + 10); <br/> 
      pdf.text(`Price: ${product.price}`, 40, y + 20); <br/>
      pdf.text(`Offer: ${product.offer}`, 40, y + 30); <br/>
      pdf.text(`Total Price: ${product.total}`, 40, y + 40);
    }); 
    if (addressData) {
      pdf.text(`Delivery Address: ${addressData.address}`, 20, 240);
      pdf.text(`House/Flat No: ${addressData.house}`, 20, 250);
      pdf.text(`Area: ${addressData.area}`, 20, 260);
      pdf.text(`Landmark: ${addressData.landmark}`, 20, 270);
    }

    pdf.save('Receipt.pdf');

    
  };



  
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='bg-light p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Container className='payment-container w-100'>
                <div style={{display: "flex"}}>
                  <div>
                    <h2 className='payment-heading-center' style={{ color: 'black', marginLeft: "164%", marginRight: "-200%" }}>
                      Payment Details
                    </h2>
                  </div>
                  <div style={{marginLeft: "70%", marginRight: "-150%"}}>
                    {success && (
                      <Button className='mt-4' variant='primary' onClick={handlePrintReceipt} style={{marginLeft: "37%", borderRadius: "2rem"}}>
                        Print Receipt
                      </Button>
                    )}
                  </div>
                </div>
                <br />
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='paymentMethod'>
                    <Form.Label style={{ marginLeft: '32%', fontSize: "1.2rem" }}>Select Payment Method</Form.Label> <br/>
                    <Form.Control
                      as='select'
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                      style={{ marginLeft: '35%' }}>
                      <option value='' disabled> <br/>
                        Select Payment Method
                      </option>
                      <option value='credit_card' >Credit Card</option>
                      <option value='debit_card'>Debit Card</option>
                      <option value='upi'>UPI</option>
                      <option value='razorpay'>Razorpay</option>
                      <option value='cash_on_delivery'>Cash On Delivery</option>
                    </Form.Control>
                  </Form.Group> <br/>
                  {paymentMethod === 'upi' && (
                    <Form.Group controlId='upiNumber'>
                      <Form.Label style={{ marginLeft: '37%', fontSize: "1.2rem" }}>UPI Number</Form.Label> <br/>
                      <Form.Control
                        type='text'
                        placeholder='Enter UPI Number'
                        value={upiNumber}
                        onChange={(e) => setUpiNumber(e.target.value)}
                        required
                        style={{ marginLeft: '35%' }}/>
                    </Form.Group> 
                  )}

                  {paymentMethod !== 'upi' && paymentMethod !== 'cash_on_delivery' && (
                    <>
                      <Form.Group controlId='cardNumber'>
                        <Form.Label style={{ marginLeft: '36%', fontSize: "1.2rem" }}>Card Number</Form.Label> <br/>
                        <Form.Control
                          type='text'
                          placeholder='Enter card number'
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                          style={{ marginLeft: '35%' }}/>
                      </Form.Group>
                      <Form.Group controlId='expirationDate'>
                        <Form.Label style={{ marginLeft: '38%', fontSize: "1.2rem" }}>Expiration Date</Form.Label><br/>
                        <Form.Control
                          type='text'
                          placeholder='MM/YY'
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                          required
                          style={{ marginLeft: '35%' }}/>
                      </Form.Group>
                      <Form.Group controlId='cvv'>
                        <Form.Label style={{ marginLeft: '42%', fontSize: "1.2rem" }}>CVV</Form.Label> <br/>
                        <Form.Control
                          type='text'
                          placeholder='Enter CVV'
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                          style={{ marginLeft: '35%' }}/>
                      </Form.Group>
                    </>
                  )} 
                  
                  {paymentMethod === 'cash_on_delivery' && (
                  <div style={{ marginLeft: '35%' }}>
                    <Alert variant='warning'>Cash On Delivery selected</Alert>
                  </div>
                )}<br/>
                  <div className='payment-heading-center'>
                    <Button className='mt-4' variant='primary' type='submit' disabled={loading} style={{marginLeft: "35%"}}>
                      {loading ? 'Processing...' : 'Submit Payment'} 
                    </Button>
                  </div> <br/>
                  {error && <Alert variant='danger' style={{color: "red", marginLeft: "32%"}}>{error}</Alert>} {/* Display error alert */}
                  {success && <Alert variant='success' style={{color: "green", marginLeft: "35%"}}>Payment successful!</Alert>} 
                </Form>
                
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
