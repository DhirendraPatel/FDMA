import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/cheese2.jpg";
import CantactForm from './CantactForm/CantactForm'
import Faq from '../../Faq';
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact with us"
      />
      <CantactForm />
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Contact