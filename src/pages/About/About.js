import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from './AboutInfo/AboutInfo'
import OurData from './OurData/OurData'
import Gallery from './Gallery/Gallery'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage
        bgImage={bgImage}
        heading={["about us ", <span className="ampersand"> & </span>, " photo gallery"]}
        text="Take a look at the place, the people and the food…"
      />
      <AboutInfo />
      <OurData />
      <Gallery />
      <Footer/>
    </div>
  );
};

export default About;
