import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
var count=0;
const OffersCard = (props) => {
  const { addItem } = useCart()
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{display: "flex"}}>
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} style={{width: "110%", height: "30vh"}}/>
        <div className="card-body text-center text-dark">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">Price:  ₹{props.price}</h5>
          <p className="card-text">Discount : {props.persentage}%</p>
          <h5 className="card-title">Deal Price:  ₹{props.price-props.dis}</h5>
          <button
            className="btn btn-success"
            onClick={() => addItem({ id: props.id,price: props.price-props.dis,title:props.title,img:props.img})}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
  }

export default OffersCard;