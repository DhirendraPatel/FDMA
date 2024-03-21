import React from 'react'

export default function TopHeading() {
  return (
    <div className='flex items-center justify-center w-full'>
    <div className='py-6 flex flex-col items-center gap-6'>
         <h1 className='font-semibold font-[font-serif] text-5xl' style={{marginLeft: "10%", fontSize: "2.5rem"}}>Our Best<span className='text-[#FF6600]'> Services</span></h1> <br/>
        <p className='text-center text-gray-600/70 sm:w-1/2' style={{textAlign: "center"}}>"Our best services redefine excellence, offering unmatched quality and personalized solutions to exceed your expectations. <br/> Experience the pinnacle of service with us today!"</p> <br/>
        <hr className='sm:w-14 w-40  border-[#FF6600] border-2 ' style={{width: "10%", marginLeft: "43%", fontWeight: "bolder"}}/> <br/>
    </div>
    </div>
  )
}
