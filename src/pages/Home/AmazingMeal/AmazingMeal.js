import React, { useState } from "react";

import "./AmazingMeal.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";
import image3 from "../../../assets/cake.jpg";
import image4 from "../../../assets/coffee.jpg";
import image5 from "../../../assets/pizza.jpeg";
import image6 from "../../../assets/biryani.jpg";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
    { id: 6, url: image6 },
  ]);

  const images = [
    {  src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 1' },
    {  src: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 2' },
    {  src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 3' },
    {  src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 1' },
    {  src: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 2' },
    {  src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 3' },
    {  src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 1' },
    {  src: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 2' },
    {  src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 3' },
    {  src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 1' },
    {  src: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 2' },
    {  src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Food Image 3' },
  ];

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };


  const settings = {
    speed: 200,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Experience the perfect fusion of amazing meals and great entertainment at our restaurant. Indulge in our chef's signature dishes, each crafted with passion and precision to delight your taste buds. As you dine, immerse yourself in the vibrant atmosphere filled with live performances, adding an extra layer of enjoyment to your culinary journey. From interactive dining experiences to family-friendly fun, there's something for everyone to enjoy. 
              <br />
              <br />
              Come join us for an unforgettable dining experience where delicious food meets fantastic entertainment.
            </p>

            <blockquote>
            "Good food is the foundation of genuine happiness."            
            </blockquote>
          </div>
        </div>
         
         <br/>
        <div className="food-carousel">
          <h1 style={{marginLeft: "1%", fontFamily: 'Argentina', fontSize: "2.7rem"}}>Our Top Products</h1> <br/>
      <Slider {...setting}>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} style={{width: "90%", height: "45vh", borderRadius: "2rem"}}/>
          </div>
        ))}
      </Slider>
    </div>
    </div> 
    </div> 
  );
};

export default AmazingMeal;
