import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './LunchTime.css'



const menuDataLeft = [
    {
      title: "Biryani",
      description: "Ale & artichokes",
      price: 38,
    },
    {
      title: "Meals",
      description: "Mushroom ketchup & fries",
      price: 42,
    },
    {
      title: "Mutton Biryani",
      description: "Smoked confit fennel & umbles",
      price: 35,
    },
    {
      title: "Veg Meals",
      description: "Mussel & seaweed ketchup, salmon roe & sea rosemary",
      price: 22,
    },
  ];
  
  const menuDataRight = [
    {
      title: "Sambar-Rice",
      description: "Pan fried line fish, herbed nicola potato and mussel salad",
      price: 27,
    },
    {
      title: "Curd-Rice",
      description: "Pan seared lamb loin, slow roasted lamb shanks",
      price: 33,
    },
    {
      title: "Andhra Meals",
      description: "Confit duck leg, mushroom and liver stuffing and onions",
      price: 75,
    },
    {
      title: "Homedried Tomato",
      description: "with sesame, aubergine puree and burnt aubergine jelly",
      price: 22,
    },
  ];

const LunchTime = () => {
  return (
    <div className='section'>
        <div className="container lunch-time">
      <h1 className="heading-secondary">
        Lunch<span>Time</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default LunchTime