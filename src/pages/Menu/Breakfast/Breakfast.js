import React from "react";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Dosa",
    description: "A dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice",
    price: "21.5",
  },
  {
    title: "Idly",
    description: "Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food",
    price: "16",
  },
  {
    title: "Poori",
    description:
      "Puri, also poori, is a type of deep-fried bread, made from unleavened whole-wheat flour, originated from the Indian subcontinent",
    price: "17",
  },
];

const menuDataRight = [
  {
    title: "Parotta",
    description: "Parotta or Porotta is a layered Indian and Sri Lankan flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.",
    price: 13,
  },
  {
    title: "Ghee Dosa",
    description: "Plain dosa cooked with Ghee instead of oil and usually with no filling",
    price: 8.5,
  },
  {
    title: "Uthappa",
    description: "A large, slightly thick pancake from southern India, made from a fermented batter of rice and lentil flours",
    price: 21,
  },
];

const Breakfast = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        break<span>fast</span>
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
  );
};

export default Breakfast;
