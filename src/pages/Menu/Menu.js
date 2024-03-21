import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/biryani.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'
import ViewProducts from "../../ViewProducts.js";

const Menu = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Eat well, live simply, laugh often"
      /> */}
      {/* <MenuOfTheDay /> */}
      {/* <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      <Beverages /> */}
      <ViewProducts/>
      <Footer/>
    </div>
  );
};

export default Menu;
