import React from "react";
import HeroImage from "./components/HeroImage/HeroImage";
import bgImage from "./assets/biryani.jpg";
import MenuOfTheDay from "./pages/Menu/MenuOfTheDay/MenuOfTheDay.js";
import Breakfast from "./pages/Menu/Breakfast/Breakfast.js";
import LunchTime from "./pages/Menu/LunchTime/LunchTime.js";
import CoffeeSelection from "./pages/Menu/CoffeeSelection/CoffeeSelection.js";
import Beverages from "./pages/Menu/Beverages/Beverages.js";
import Navbar from './Navbar.jsx'
import Footer from "./components/Footer/Footer.js";

const MenuCard = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
      /> <br/> <br/>
      {/* <MenuOfTheDay />  */}
      <Breakfast />
      <LunchTime />
      {/* <CoffeeSelection /> */}
      <Beverages /> 
      <Footer/>
    </div>
  );
};

export default MenuCard;
