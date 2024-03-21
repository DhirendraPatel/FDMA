import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from './components/HeroImage/HeroImage';
import bgImage from "./assets/biryani.jpg";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import "./BookTable.css";

const BookTable = () => {
  const [formData, setFormData] = useState({
    date: '',
    numberOfPersons: '',
    email: '',
    subtable: ''
  });
  const [errors, setErrors] = useState({});
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);


  useEffect(() => {
    setAvailableSlots([]);
  }, [selectedTable]);

  const sendOTP = async () => {
    try {
      const response = await fetch('http://localhost:8078/table/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        toast.success('OTP sent successfully to your MailId');
        setOtpSent(true);
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'numberOfPersons' ? parseInt(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.numberOfPersons < 1 || formData.numberOfPersons > 20) {
        setErrors({ numberOfPersons: 'Number of persons must be between 1 and 20' });
        return;
      }

      if (!otpSent) {
        await sendOTP();
        return;
      }

      const tables = getAvailableTables(formData.numberOfPersons);
      setAvailableTables(tables);

    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  // const handleTableSelect = async (table) => {
  //   setSelectedTable(table);
  //   try {
  //     const response = await fetch(`http://localhost:8078/table/availability?date=${encodeURIComponent(formData.date)}&numberOfPersons=${formData.numberOfPersons}&email=${encodeURIComponent(formData.email)}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch availability');
  //     }
  //     const data = await response.json();
  //     setAvailableSlots(data);
      
  //     const tableLetter = table.split('(')[1].charAt(0);
  //     setFormData({ ...formData, tableLetter: tableLetter });
  //   } catch (error) {
  //     console.error('Error fetching available slots:', error);
  //     toast.error('Failed to fetch available slots');
  //   }
  // };

  const handleTableSelect = async (table) => {
    setSelectedTable(table);
    try {
      const response = await fetch(`http://localhost:8078/table/availability?date=${encodeURIComponent(formData.date)}&numberOfPersons=${formData.numberOfPersons}&email=${encodeURIComponent(formData.email)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch availability');
      }
      const data = await response.json();
      setAvailableSlots(data);
      
      const subtable = table.split('(')[1].charAt(0);
      
      setFormData({ ...formData, subtable: subtable });
    } catch (error) {
      console.error('Error fetching available slots:', error);
      toast.error('Failed to fetch available slots');
    }
  };
  

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  // const handleBooking = async () => {
  //   try {
  //     if (!otp) {
  //       toast.error('Please enter OTP');
  //       return;
  //     }
  
  //     if (bookedSlots.includes(selectedSlot)) {
  //       toast.error('Selected slot is already booked');
  //       return;
  //     }
  
  //     const subtableLetter = selectedTable.match(/\(([^)]+)\)/)[1];
  
  //     // Add the selected slot to the list of booked slots
  //     setBookedSlots([...bookedSlots, selectedSlot]);
  
  //     const bookingData = {
  //       date: new Date(formData.date).toISOString(),
  //       time: selectedSlot,
  //       tableEntity: selectedTable,
  //       numberOfPersons: formData.numberOfPersons,
  //       email: formData.email,
  //       subtable: subtableLetter, // Add subtable letter to booking data
  //       otp: otp,
  //     };
  
  //     const response = await fetch('http://localhost:8078/table/book-selected-slot', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(bookingData),
  //     });
  
  //     if (response.ok) {
  //       toast.success('Table booked successfully');
  //       toast.success('Thank you for your booking');
  //       // window.location.reload();
  //     } else {
  //       console.error('Failed to book table');
  //       const errorMessage = await response.text();
  //       console.error(errorMessage);
  //     }
  //   } catch (error) {
  //     console.error('Error booking table:', error);
  //   }
  // };


  const handleBooking = async () => {
    try {
      if (!otp) {
        toast.error('Please enter OTP');
        return;
      }
  
      if (!selectedSlot) {
        toast.error('Please select a time slot');
        return;
      }
  
      if (bookedSlots.includes(selectedSlot)) {
        toast.error('Selected slot is already booked');
        return;
      }
  
      const subtableLetter = selectedTable.match(/\(([^)]+)\)/)[1];
  
      // Add the selected slot to the list of booked slots
      setBookedSlots([...bookedSlots, selectedSlot]);
  
      const bookingData = {
        date: new Date(formData.date).toISOString(),
        time: selectedSlot,
        tableEntity: selectedTable,
        numberOfPersons: formData.numberOfPersons,
        email: formData.email,
        subtable: subtableLetter, // Add subtable letter to booking data
        otp: otp,
      };
  
      const response = await fetch('http://localhost:8078/table/book-selected-slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        toast.success('Table booked successfully');
        toast.success('Thank you for your booking');
  
        // Refresh the page after 15 seconds
        setTimeout(() => {
          window.location.reload();
        }, 15000);
      } else {
        console.error('Failed to book table');
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Error booking table:', error);
    }
  };
  
  
  useEffect(() => {
    fetchBlockedSlots();
  }, []);
  
  const fetchBlockedSlots = async () => {
    try {
      const response = await fetch('http://localhost:8078/table/getBlockedSlots', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setBlockedSlots(data);
      } else {
        console.error('Failed to fetch blocked slots');
      }
    } catch (error) {
      console.error('Error fetching blocked slots:', error);
    }
  };

  const getAvailableTables = (numberOfPersons) => {
    if (!numberOfPersons || numberOfPersons < 1 || numberOfPersons > 10) {
      return [];
    }

    const subTables = ['a', 'b', 'c', 'd'];
    const tables = [];

    for (const subTable of subTables) {
      tables.push(`Table-${numberOfPersons}(${subTable})`);
    }

    return tables;
  };

  const generateTimeSlots = () => {
    const slots = [];
    let startTime = 9;

    for (let i = 0; i < 12; i++) {
      const endTime = startTime + 1;
      const formattedStartTime = startTime.toString().padStart(2, '0') + ':00';
      const formattedEndTime = endTime.toString().padStart(2, '0') + ':00';
      const timeSlot = `${formattedStartTime}-${formattedEndTime}`;
      slots.push(timeSlot);
      startTime = endTime;
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <>
      <Navbar/>
      <HeroImage
        bgImage={bgImage}
        heading={["Book A ", <span style={{color: "lightcyan"}}>Table</span>]}
      />
      <div id='table' className='min-h-screen container mx-auto flex justify-center'>
        <br/> <br/>
        <div className='flex-wrap sm:flex-nowrap flex items-center sm:gap-20 lg:gap-20' style={{display: "flex"}}>
          <div className='sm:w-1/2 lg:w-1/2 py-4 px-4' style={{maxWidth: "40%", marginLeft: "4%"}}>
            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full'>
                <h2 className=' text-[#FF6600] text-2xl font-mono' >Fresh From FOODIE</h2>
                <h1 className='text-5xl font-bold tracking-[6px]' style={{fontSize: "3rem", marginLeft: "-40%"}}>Book 😋 <br /> <span style={{marginLeft: "-5%"}}>Online</span></h1>
              </div>
              <p className='text-gray-700 text-medium ' style={{marginLeft: "-10%"}}>"Experience the convenience of online table booking with just a few clicks. Secure your spot hassle-free and enjoy a seamless dining experience at your favorite restaurant."</p> <br/>
              <p className='text-gray-700 text-medium ' style={{marginLeft: "10%"}}>"Reserve your seat, indulge in flavors."</p>
            </div>
          </div>

          <div className='sm:w-1/2 lg:w-1/2  sm:p-2 lg:p-2 max-w-7xl mx-auto'>
            <p className='bold text-center text-3xl font-bold tracking-wide uppercase my-4' style={{fontSize: "2rem", marginLeft: "20%"}}>Book a table</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
              <input
                type='date'
                name='date'
                placeholder='Choose Date'
                value={formData.date}
                onChange={handleChange}
                className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
                style={{ width: "80%", height: "7vh", marginTop: "3%", marginLeft: "18%" }}
                required
                min={new Date().toISOString().split('T')[0]} 
              />

              <input
                type='number'
                name='numberOfPersons'
                placeholder='How Many Person ?'
                value={formData.numberOfPersons}
                onChange={handleChange}
                className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
                style={{width: "80%", height: "7vh", marginTop: "3%", marginLeft: "18%" }}
                required
                min="1"
                max="10" 
              />
              <input
                type='email' 
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
                style={{width: "80%", height: "7vh", marginTop: "3%", marginLeft: "18%" }}
                required
              />

              {otpSent && (
                <input
                  type='text'
                  name='otp'
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
                  style={{width: "80%", height: "7vh", marginTop: "3%", marginLeft: "18%" }}
                  required
                />
              )}

              <button type='submit' className='self-center bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center' style={{marginTop: "5%", marginLeft: "33%"}}>
                {otpSent ? 'Available Tables' : 'Send OTP'}
              </button>
            </form> <br/>

            {formData.date && formData.numberOfPersons && formData.email && availableTables.length > 0 && (
              <div className="available-tables">
                <div className="table-buttons">
                  {availableTables.map((table, index) => (
                    <button key={index} className="table-button" onClick={() => handleTableSelect(table)}>
                      {table}
                    </button>
                  ))}
                </div>
              </div>
            )} 

            <br/>
            {/* {selectedTable && availableSlots.length > 0 && (
              <div className="available-slots">
                <h3 style={{marginLeft: "15%", fontWeight: "bolder"}}>Available Slots for {selectedTable}</h3> <br/>
                <ul className='slot-buttons'>
                  {timeSlots.map((slot, index) => (
                    <li key={index}>
                      <button className="slot-button" id={handleTableSelect.status} onClick={() => handleSlotSelect(slot)}>{slot}</button>
                    </li>
                  ))}
                </ul> <br/>
                {selectedSlot && (
                  <button onClick={handleBooking} className="confirm-button">Book Selected Slot  </button>
                )}
              </div>
            )} */}


{/* {selectedTable && availableSlots.length > 0 && (
  <div className="available-slots">
    <h3 style={{ marginLeft: "15%", fontWeight: "bolder" }}>Available Slots for {selectedTable}</h3> <br />
    <ul className='slot-buttons'>
      {timeSlots.map((slot, index) => (
        <li key={index}>
          <button
            className="slot-button"
            onClick={() => handleSlotSelect(slot)}
            disabled={bookedSlots.includes(slot)} 
          >
            {slot}
          </button>
        </li>
      ))}
    </ul> <br />
    {selectedSlot && (
      <button onClick={handleBooking} className="confirm-button">Book Selected Slot  </button>
    )}
  </div>
)} */}

{selectedTable && availableSlots.length > 0 && (
  <div className="available-slots">
    <h3 style={{ marginLeft: "15%", fontWeight: "bolder" }}>Available Slots for {selectedTable}</h3> <br />
    <ul className='slot-buttons'>
      {timeSlots.map((slot, index) => (
        <li key={index}>
          <button
            className="slot-button"
            onClick={() => handleSlotSelect(slot)}
            disabled={bookedSlots.includes(slot) || blockedSlots.includes(slot)} // Check if slot is blocked
          >
            {slot}
          </button>
        </li>
      ))}
    </ul> <br />
    {selectedSlot && (
      <button onClick={handleBooking} className="confirm-button">Book Selected Slot</button>
    )}
  </div>
)}

            <ToastContainer position="bottom-right" autoClose={3000} />
          </div>
        </div> <br/> <br/>
      </div>
      <Footer/>
    </>
  );
};
export default BookTable;




// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import HeroImage from './components/HeroImage/HeroImage';
// import bgImage from "./assets/biryani.jpg";
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
// import "./BookTable.css";

// const BookTable = () => {
//   const [formData, setFormData] = useState({
//     date: '',
//     numberOfPersons: '',
//     email: '',
//     subtable: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [availableTables, setAvailableTables] = useState([]);
//   const [selectedTable, setSelectedTable] = useState(null);
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [blockedSlots, setBlockedSlots] = useState([]);

//   useEffect(() => {
//     setAvailableSlots([]);
//   }, [selectedTable]);

//   // Inside the BookTable component
// // Inside the BookTable component
// useEffect(() => {
//   const fetchBookedSlots = async () => {
//     try {
//       const response = await fetch('http://localhost:8078/table/bookedSlots');
//       if (response.ok) {
//         const bookedSlotsData = await response.json();

//         // Check if there are any blocked slots stored in local storage
//         const storedBlockedSlots = localStorage.getItem('blockedSlots');
//         const storedBlockedSlotsParsed = storedBlockedSlots ? JSON.parse(storedBlockedSlots) : [];

//         // Combine the newly fetched booked slots and the stored blocked slots
//         const allBlockedSlots = [...bookedSlotsData, ...storedBlockedSlotsParsed];

//         setBookedSlots(bookedSlotsData);

//         // Filter out slots that are still blocked
//         const unblockedSlots = allBlockedSlots.filter(slot => {
//           const bookingDateTime = new Date(slot.bookingDateTime);
//           const unblockTime = new Date();
//           unblockTime.setDate(unblockTime.getDate() + 1); // Add 1 day
//           return bookingDateTime < unblockTime;
//         });

//         setBlockedSlots(unblockedSlots);

//         // Store the blocked slots in local storage
//         localStorage.setItem('blockedSlots', JSON.stringify(unblockedSlots));
//       } else {
//         throw new Error('Failed to fetch booked slots');
//       }
//     } catch (error) {
//       console.error('Error fetching booked slots:', error);
//       toast.error('Failed to fetch booked slots');
//     }
//   };

//   fetchBookedSlots();
// }, []);

// const generateTimeSlots = () => {
//   const slots = [];
//   let startTime = 9;

//   for (let i = 0; i < 12; i++) {
//     const endTime = startTime + 1;
//     const formattedStartTime = startTime.toString().padStart(2, '0') + ':00';
//     const formattedEndTime = endTime.toString().padStart(2, '0') + ':00';
//     const timeSlot = `${formattedStartTime}-${formattedEndTime}`;

//     // Check if the slot is blocked
//     const isBlocked = blockedSlots.some(bs => bs.time === formattedStartTime);
//     if (!isBlocked) {
//       slots.push(timeSlot);
//     }
    
//     startTime = endTime;
//   }

//   return slots;
// };



//   const sendOTP = async () => {
//     try {
//       const response = await fetch('http://localhost:8078/table/sendOTP', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//         }),
//       });

//       if (response.ok) {
//         toast.success('OTP sent successfully to your MailId');
//         setOtpSent(true);
//       } else {
//         const errorMessage = await response.text();
//         toast.error(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const parsedValue = name === 'numberOfPersons' ? parseInt(value) : value;
//     setFormData({ ...formData, [name]: parsedValue });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.numberOfPersons < 1 || formData.numberOfPersons > 20) {
//         setErrors({ numberOfPersons: 'Number of persons must be between 1 and 20' });
//         return;
//       }

//       if (!otpSent) {
//         await sendOTP();
//         return;
//       }

//       const tables = getAvailableTables(formData.numberOfPersons);
//       setAvailableTables(tables);

//     } catch (error) {
//       console.error('Error handling form submission:', error);
//     }
//   };

//   const handleTableSelect = async (table) => {
//     setSelectedTable(table);
//     try {
//       const response = await fetch(`http://localhost:8078/table/availability?date=${encodeURIComponent(formData.date)}&numberOfPersons=${formData.numberOfPersons}&email=${encodeURIComponent(formData.email)}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch availability');
//       }
//       const data = await response.json();
//       setAvailableSlots(data);
      
//       const subtable = table.split('(')[1].charAt(0);
      
//       setFormData({ ...formData, subtable: subtable });
//     } catch (error) {
//       console.error('Error fetching available slots:', error);
//       toast.error('Failed to fetch available slots');
//     }
//   };
  

//   const handleSlotSelect = (slot) => {
//     setSelectedSlot(slot);
//   };

//   const handleBooking = async () => {
//     try {
//       if (!otp) {
//         toast.error('Please enter OTP');
//         return;
//       }
  
//       if (!selectedSlot) {
//         toast.error('Please select a time slot');
//         return;
//       }
  
//       if (bookedSlots.some(slot => slot.time === selectedSlot)) {
//         toast.error('Selected slot is already booked');
//         return;
//       }
  
//       const subtableLetter = selectedTable.match(/\(([^)]+)\)/)[1];
  
//       const bookingData = {
//         date: new Date(formData.date).toISOString(),
//         time: selectedSlot,
//         tableEntity: selectedTable,
//         numberOfPersons: formData.numberOfPersons,
//         email: formData.email,
//         subtable: subtableLetter, // Add subtable letter to booking data
//         otp: otp,
//       };
  
//       const response = await fetch('http://localhost:8078/table/book-selected-slot', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });
  
//       if (response.ok) {
//         toast.success('Table booked successfully');
//         toast.success('Thank you for your booking');
        
//         // Update bookedSlots state with the newly booked slot
//         const newBooking = {
//           id: response.id, // Use the ID returned by the backend if available
//           bookingDateTime: new Date().toISOString(), // Use current time as booking time
//           date: formData.date,
//           time: selectedSlot,
//           numberOfPersons: formData.numberOfPersons,
//           subtable: subtableLetter,
//           email: formData.email,
//           status: 'booked',
//           bookingId: response.bookingId, // Use the booking ID returned by the backend if available
//           otp: otp,
//         };
//         setBookedSlots([...bookedSlots, newBooking]);

//         // Calculate unblock time for the newly booked slot
//         const unblockTime = new Date();
//         unblockTime.setDate(unblockTime.getDate() + 1); // Add 1 day

//         // Add the newly booked slot to the blocked slots
//         setBlockedSlots([...blockedSlots, newBooking]);

//         // Clear the selected slot and OTP
//         setSelectedSlot(null);
//         setOtp('');

//       } else {
//         console.error('Failed to book table');
//         const errorMessage = await response.text();
//         console.error(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error booking table:', error);
//     }
//   };
  
  
//   const getAvailableTables = (numberOfPersons) => {
//     if (!numberOfPersons || numberOfPersons < 1 || numberOfPersons > 10) {
//       return [];
//     }

//     const subTables = ['a', 'b', 'c', 'd'];
//     const tables = [];

//     for (const subTable of subTables) {
//       tables.push(`Table-${numberOfPersons}(${subTable})`);
//     }

//     return tables;
//   };

//   const timeSlots = generateTimeSlots();

//   return (
//     <>
//       <Navbar/>
//       <HeroImage
//         bgImage={bgImage}
//         heading={["Book A ", <span style={{color: "lightcyan"}}>Table</span>]}
//       />
//       <div id='table' className='min-h-screen container mx-auto flex justify-center'>
//         <br/> <br/>
//         <div className='flex-wrap sm:flex-nowrap flex items-center sm:gap-8 gap-6'>
//           <div className='sm:w-1/2 lg:w-1/2  sm:p-2 lg:p-2 max-w-7xl mx-auto'>
//             <p className='bold text-center text-3xl font-bold tracking-wide uppercase my-4' style={{fontSize: "2rem"}}>Book a table</p>
//             <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
//               <input
//                 type='date'
//                 name='date'
//                 placeholder='Choose Date'
//                 value={formData.date}
//                 onChange={handleChange}
//                 className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
//                 style={{ width: "80%", height: "7vh", marginTop: "3%" }}
//                 required
//                 min={new Date().toISOString().split('T')[0]} 
//               />

//               <input
//                 type='number'
//                 name='numberOfPersons'
//                 placeholder='How Many Person ?'
//                 value={formData.numberOfPersons}
//                 onChange={handleChange}
//                 className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
//                 style={{width: "80%", height: "7vh", marginTop: "3%" }}
//                 required
//                 min="1"
//                 max="10" 
//               />
//               <input
//                 type='email' 
//                 name='email'
//                 placeholder='Your Email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
//                 style={{width: "80%", height: "7vh", marginTop: "3%" }}
//                 required
//               />

//               {otpSent && (
//                 <input
//                   type='text'
//                   name='otp'
//                   placeholder='Enter OTP'
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
//                   style={{width: "80%", height: "7vh", marginTop: "3%" }}
//                   required
//                 />
//               )}

//               <button type='submit' className='self-center bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center' style={{marginTop: "5%"}}>
//                 {otpSent ? 'Available Tables' : 'Send OTP'}
//               </button>
//             </form> <br/>

//             {formData.date && formData.numberOfPersons && formData.email && availableTables.length > 0 && (
//               <div className="available-tables">
//                 <div className="table-buttons">
//                   {availableTables.map((table, index) => (
//                     <button key={index} className="table-button" onClick={() => handleTableSelect(table)}>
//                       {table}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )} 

//             <br/>
//             {selectedTable && availableSlots.length > 0 && (
//               <div className="available-slots">
//                 <h3>Available Slots for {selectedTable}</h3> <br />
//                 <ul className='slot-buttons'>
//                 {timeSlots.map((slot, index) => (
//   <li key={index}>
//     <button
//       className={`slot-button ${blockedSlots.some(bs => bs.time === slot) ? 'blocked' : ''}`}
//       onClick={() => handleSlotSelect(slot)}
//       disabled={blockedSlots.some(bs => bs.time === slot)}
//     >
//       {slot}
//     </button>
//   </li>
// ))}

//                 </ul>
//               </div>
//             )}

//             {selectedSlot && (
//               <div className='flex justify-center'>
//                 <button onClick={handleBooking} className='bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center' style={{marginTop: "5%"}}>Book</button>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BookTable;
