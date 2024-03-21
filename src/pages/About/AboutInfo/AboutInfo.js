import React from "react";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
            Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. 
              {/* <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage */}</p>
              <blockquote>
            Established in 2018, FOODIE was founded by a team of passionate food enthusiasts with a shared love for cooking, eating, and everything in between.
            </blockquote>
              <br/>
              <p>
              Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine, which means the first impression happens long before they set foot on-premises. It happens online. And when it does, the restaurant description plays a pivotal role.
            </p>

            

            <p>
              
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO DINE, A PLACE <span>TO CONNECT</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Step into our warm and inviting ambiance, where every corner tells a story of culinary craftsmanship and hospitality. Our dedicated team of chefs meticulously curates each dish, drawing inspiration from both traditional recipes and contemporary trends to create a menu that caters to diverse palates.
            </p>

            <blockquote>
            Thank you for visiting FOODIE – we hope you enjoy exploring our website and discovering the delicious delights that await!
            </blockquote>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
