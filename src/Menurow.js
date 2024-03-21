import React from 'react';
import "./Menurow.css";

const Menurow = () => {
  const chefs = [
    {
      id: 1,
      image: "https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-9.jpg",
      name: "biryani"
    },
    {
      id: 2,
      image: "https://previews.123rf.com/images/livedubai/livedubai1801/livedubai180100010/93195584-south-indian-meals-on-a-plate.jpg"
    },
    {
      id: 3,
      image: "https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha.jpg"
    },
    {
      id: 4,
      image: "https://18.ebaraha.com/sevenspices/wp-content/uploads/2021/01/idly.png"
    },
    {
        id: 1,
        image: "https://www.onmycanvas.com/wp-content/uploads/2021/06/triangular-masala-dosa-feature-1024x842.jpeg"
      },
      {
        id: 2,
        image: "https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-9.jpg"
      },
      {
        id: 3,
        image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
      },
      {
        id: 4,
        image: "https://theyummydelights.com/wp-content/uploads/2022/07/chilli-chicken-dry.jpg"
      },
      {
        id: 3,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ofgu81xyoogzhg3ylov7"
      },
      {
        id: 4,
        image: "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg"
      }
  ];

  return (
    <div className="menu-gallery">
      {chefs.map(chef => (
        <div key={chef.id} className="menu-card">
          <a href={chef.link}>
            <img className="menu-image" src={chef.image} alt={`Chef ${chef.id}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menurow;
