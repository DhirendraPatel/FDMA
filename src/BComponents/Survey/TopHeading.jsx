import React from 'react'
import { Link } from 'react-router-dom'

export default function TopHeading() {
  return (
    <div className='py-6 flex flex-col gap-6 items-start'style={{marginLeft: "40%"}}>
         <h1 className='font-bold text-5xl'> <span className="italic text-7xl font-[500] leading-[1.3]">Survey</span> <br /> About Our<span className='text-[#FF6600]'> Food</span></h1>
        <p className=' opacity-70 ' style={{maxWidth: "90%"}}>"A delightful journey through diverse cuisines! The Survey of Food experience left me amazed by the array of flavors and textures. Each dish was a masterpiece, meticulously prepared and bursting with taste. Highly recommended!"</p> <br/>
        <p className=' opacity-70 ' style={{maxWidth: "90%"}}>"A delightful journey through diverse cuisines! The Survey of Food experience left me amazed by the array of flavors and textures. Each dish was a masterpiece, meticulously prepared and bursting with taste. Highly recommended!"</p> <br/>
        {/* <Link to="Signin"><button className='py-1 w-40 px-4 rounded-full bg-[#FF6600]/80 text-white text-lg ' style={{borderRadius: "2rem"}}>Book Table</button></Link> */}
    </div>
    
  )
}
