import React, { useState } from 'react';
import "./OurChef.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurChef = () => {
  const [selectedChef, setSelectedChef] = useState(null);

  const openChefDetail = (chef) => {
    setSelectedChef(chef);
  };

  const closeChefDetail = () => {
    setSelectedChef(null);
  };

    const chefs = [
        {
          id: 1,
          name: "Sumit",
          image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201408/moon_youtube--3_650_083114122526.jpg",
          specialization: "Tandoori Expert",
          description: "Chef Sumit is renowned for his expertise in tandoori cuisine, with a mastery in crafting succulent tandoori dishes. His signature dish, Tandoori Chicken, is marinated in a blend of yogurt and aromatic spices, then cooked to perfection in a traditional clay oven, resulting in tender, flavorful chicken with a smoky char. With years of experience and a passion for authentic Indian flavors, Chef Sumit brings the essence of North Indian cuisine to the table with each dish."
        },
        {
          id: 2,
          name: "Gautham Kumar",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUAIh0SGnTyPTEuWXvWuVlViLx3tQ3_BBC0683OXCrL-vtauq0b61l9g5knrFda_gqas&usqp=CAU",
          specialization: "Curry Maestro",
          description: "Chef Gautham Kumar is known for his exceptional skills in creating delectable curry dishes from various regions around the world. His expertise lies in blending aromatic spices and fresh ingredients to create rich and flavorful curries that tantalize the taste buds. With a passion for culinary exploration and a dedication to quality, Chef Gautham Kumar delights diners with his diverse range of curry creations."
        },
        {
          id: 3,
          name: "Suresh Bhaskar",
          image: "https://media.licdn.com/dms/image/C5603AQHxqeEOBb-QZA/profile-displayphoto-shrink_400_400/0/1633248582076?e=2147483647&v=beta&t=mgf6yP36MrDFa3itAaPlsfcFzwcliauy-N7Q-vqM1uo",
          specialization: "Biryani Connoisseur",
          description: "Chef Suresh Bhaskar is a master of biryani, with a passion for creating authentic and aromatic rice dishes that are packed with flavor. His biryanis are known for their perfect balance of spices and tender, succulent meat or vegetables, creating a harmonious blend of textures and tastes. With years of experience and a deep understanding of traditional cooking techniques, Chef Suresh Bhaskar brings the rich culinary heritage of biryani to life with each dish."
        },
        {
          id: 4,
          name: "Deena",
          image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201408/moon_youtube--3_650_083114122526.jpg",
          specialization: "Chinese Food Expert",
          description: "Chef Deena is celebrated for her expertise in Chinese cuisine, with a talent for creating authentic and flavorful dishes that capture the essence of Chinese cooking. Her mastery of wok cooking techniques and skillful use of ingredients result in dishes that are both delicious and visually stunning. With a commitment to quality and innovation, Chef Deena brings the vibrant flavors of Chinese cuisine to diners seeking an unforgettable culinary experience."
        }
  ];
  
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Great product! It exceeded my expectations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKP-DJqyU639hvCQW6ZpfBZhEgvv0ezoIFw&usqp=CAU',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Excellent service! The team was very helpful.',
      image: 'https://e1.pxfuel.com/desktop-wallpaper/571/550/desktop-wallpaper-handsome-boy-indian-boys.jpg',
      rating: 4,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      comment: 'I love it! Will definitely recommend to my friends.',
      image: 'https://e1.pxfuel.com/desktop-wallpaper/431/667/desktop-wallpaper-handsome-boy-for-fb-indian-boy-pic.jpg',
      rating: 5,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };


  return (
    <>
    <h1 style={{marginLeft: "5%", fontFamily: 'Argentina', fontSize: "2.7rem"}}>Our Top Cheifs</h1>
    <div className="chef-gallery">
      {chefs.map(chef => (
        <div key={chef.id} className="chef-card" onClick={() => openChefDetail(chef)}>
          <img className="chef-image" src={chef.image} alt={chef.name} />
          <div className="chef-details">
            <h3>{chef.name}</h3>
            <p>{chef.specialization}</p>
          </div>
        </div>
      ))}
      {selectedChef && (
        <div className="chef-popup">
          <div className="chef-popup-content">
            <button className="close-btn" onClick={closeChefDetail}>&times;</button>
            <img src={selectedChef.image} alt={selectedChef.name} />
            <div>
              <h2>{selectedChef.name}</h2>
              <p>{selectedChef.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>

    <br/> <br/>



    <section class="why-choose-us" style={{maxWidth: "100%", marginRight: "0%"}}>
      <div style={{display: "flex", marginLeft: "5%"}}>
      <div > <br/> <br/> <br/> <br/>
      <h2>Every flavor <br/> Welcomes You</h2>
      <h5 style={{maxWidth: '40%'}}>"Our commitment to quality, freshness, and exceptional service sets us apart. <br/>With a passion for crafting delicious meals using only the finest ingredients, <br/>we strive to exceed your expectations with every bite. Experience the difference with us and indulge in a culinary journey that delights the senses and leaves a lasting impression."</h5>
      </div>

    <div style={{marginLeft: "-64%"}}>
      <h1 style={{fontSize: "2.6rem", color: "lightcoral"}}>Why Choose Us</h1>
      <div class="image-container"> <br/> <br/><br/> <br/> 
  <img src='https://media.istockphoto.com/id/932004386/photo/thoughtful-chef-working-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=6XB_JgiA511R9ikBY1TWuoF6XlQgM82TgFIqynX1GEQ=' style={{width: "75%", height: "60vh", borderRadius: "20%", marginLeft: "20%"}}/>
  <div class="benefits" style={{margiTop: "-15%"}}>
    <div class="benefit" >
      <i class="fas fa-truck"></i>
      <h3>Quality Food</h3>
      <p>Breakfast</p>
      <p>Lunch</p>
      <p>Dinner</p>
    </div>
  </div>
  </div>
</div>
</div>
</section>
 <br/> <br/>

    <section>
      <h1 className="section-title">Our Top Testimonials</h1> <br/>
      
    <div className="testimonial-container">
        <Slider {...settings}>
          {testimonialData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="name">{testimonial.name}</p>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < testimonial.rating ? 'filled' : ''}>★</span>
                  ))}
                </div>
                <p className="comment">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>

    
    
    </>
  );
};


export default OurChef;


