import React from 'react'
import Hero from './Hero/Hero.js'
import AmazingMeal from './AmazingMeal/AmazingMeal.js'
import OurChef from './OurChef/OurChef.js'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'

const AfterHome = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AmazingMeal />
      <Footer/>
    </div>
  )
}

export default AfterHome