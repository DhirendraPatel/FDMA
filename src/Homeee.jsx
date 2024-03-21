// import React from "react";
// import Button from "./layouts/Button";

// const Home = () => {
//   return (
//     <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
//       <div className=" w-full lg:w-2/3 space-y-5">
//         <h1 className=" text-backgroundColor font-semibold text-6xl">
//           Elevate Your Inner Foodie with Every Bite.
//         </h1>
//         <p className=" text-backgroundColor">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
//           maxime assumenda repellat corrupti officia dolorum delectus labore
//           deleniti?
//         </p>
//         <div className=" lg:pl-44">
//           <Button title="Order Now" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from 'react'
import { MotionConfig, motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function HeroLeft() {
  const variants = {
    initial:{scale:0, opacity:0 },
    animate:{scale:1, opacity:1 ,transition:{
      duration:0.6
    } },
    hover:{scale:1.06}
  }
  return (
    <>
    <div style={{display: "flex"}}>
      <div style={{marginLeft: "5%"}}>
    <MotionConfig
    transition={{ type:'spring', damping:10,stiffness:50}}
    >
    
    <div className=' flex flex-col items-start'>
        <motion.div layout='position' className='flex flex-col gap-6 py-5'> <br/> <br/> <br/>
        <motion.h1
          initial={{x:'-100%', opacity:0 }}
          animate={{x:0 ,opacity:1}}
        className='text-3xl font-semibold font-[Verdana,Geneva,Tahoma,sans-serif]' style={{marginRight: "-50%", fontSize: '2.3rem'}}>Wide Option Of Choice <br />
        it's not just a food
        </motion.h1>
        <motion.h1 
          initial={{y:'100', opacity:0 }}
          animate={{y:0 ,opacity:1}}
        className='font-semibold font-[font-serif] text-5xl' style={{fontSize: "3rem", color: "#FF6600", marginLeft: "22%", marginRight: "-30%"}}>Delicious<span className='text-[#FF6600]'> Food</span></motion.h1> <br/>
        <p style={{marginRight: "-40%", marginLeft: "10%"}}>"A Symphony of Flavors Your Journey to Culinary Bliss Starts Now."</p>
        <br/>
        </motion.div>
        <motion.div layout className="self-center sm:self-start lg:self-start flex items-center sm:gap-3 lg:gap-3 gap-12 mt-5" style={{marginLeft: "30%"}}>
          <Link to="Signin"><motion.button 
          variants={variants} animate='animate' initial='initial' whileHover='hover'
          className='py-1 px-4 font-[500] rounded-full bg-[#FF6600]/80 text-white text-lg  transition-gpu ' style={{borderRadius: "2rem"}}>Our Menu</motion.button></Link>
          <Link to="Signin"><motion.button
          variants={variants} animate='animate' initial='initial'  whileHover='hover'
          className='py-1 px-4 font-[500] rounded-full bg-slate-400/30 text-black text-lg  transition-gpu ' style={{borderRadius: "2rem"}}>Book Table</motion.button></Link>
        </motion.div>
    </div>
    </MotionConfig>
    </div>

<div className='relative' style={{marginLeft: "20%"}}>
<motion.div
      transition={{ duration: 1, type: 'keyframes' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }} 
      className="absolute z-10 top-16"
    > <br/> <br/>
      {/* <div className="bg-[white/70] backdrop-blur-sm border border-white shadow-lg py-1 px-2 rounded-lg">
        <p className='font-bold text-3xl letter-2'>5%</p>
        <h1 className='font-bold text-sm'><span className='text-[#FF6600]'>discount</span> on 1st order</h1>
      </div> */}
    </motion.div>
        <motion.div layoutId='tab' className='rounded-full'>
        <motion.img  
        transition={{duration:0.5 ,type:'tween'}}
        initial={{x:'100%', opacity:0 }}
        animate={{x:0 ,opacity:1}} 
          className='duration-300 ' src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero Section" style={{width: "90%", height: '70vh', borderRadius: '50%'}}/>
        </motion.div>
    </div> <br/> <br/>
    </div>
</>
  )
}
