import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to FOODIE
            </h1>

            <p className='text-white'>"We're here to bring deliciousness right to your doorstep 
            <br/> <p className='text-white' style={{marginLeft: "45%", marginRight: "-40%"}}>Order now and let the feasting begin!"</p></p>
            <br/>
            <p className='text-white'>
                Book online or call <span className='special-word'>+91-040-6793 2204</span>
            </p>
        </div>
    </div>
  )
}

export default Hero