import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactSection() {
  return (
    <div id='table' className='min-h-screen container mx-auto flex justify-center'>  <br/> <br/>
      <div className='flex-wrap sm:flex-nowrap flex items-center sm:gap-20 lg:gap-20' style={{display: "flex"}}>
        <div className='sm:w-1/2 lg:w-1/2 py-4 px-4' style={{maxWidth: "40%", marginLeft: "10%"}}>
          <div className='flex flex-col gap-4 w-full'>
            <div className='w-full'>
              <h2 className=' text-[#FF6600] text-2xl font-mono'>Fresh From FOODIE</h2>
              <h1 className='text-5xl font-bold tracking-[6px]' style={{fontSize: "3rem"}}>Book 😋 <br />Online</h1>
            </div>
            <p className='text-gray-700 text-medium '>"Experience the convenience of online table booking with just a few clicks. Secure your spot hassle-free and enjoy a seamless dining experience at your favorite restaurant."</p>
            <p className='text-gray-700 text-medium '>"Reserve your seat, indulge in flavors."</p>
            {/* <button type='submit' className=' border text-[#FF6600] rounded-full py-2 px-6 w-36 text-center'>View </button> */}
          </div>
        </div>

        <div className='sm:w-1/2 lg:w-1/2  sm:p-2 lg:p-2 max-w-7xl mx-auto'>
          <p className='bold text-center text-3xl font-bold tracking-wide uppercase my-4' style={{fontSize: "2rem", marginLeft: "17%"}}>Book a table</p>
          <form action="" className='flex flex-col gap-y-6'>
            <input type="text" placeholder='Name' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' style={{width: "80%", height: "7vh"}}/>  
            <input type="email" placeholder='Email' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' style={{width: "80%", height: "7vh", marginTop: "3%"}}/> 
            <input type="number" placeholder='How Many Person ?' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' style={{width: "80%", height: "7vh",marginTop: "3%"}}/> 
            <input type='text' placeholder='Choose Date' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full' style={{width: "80%", height: "7vh", marginTop: "3%"}}/> <br/>
            <Link to="Signin"><button type='submit' className='self-center bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center' style={{marginTop: "5%", marginLeft: "30%"}}>Submit</button></Link>
          </form>
        </div>
      </div> <br/> <br/> 
    </div>
  )
}










