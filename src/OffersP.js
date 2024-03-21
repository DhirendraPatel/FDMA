import React from "react";
import Footer from "./Footer";
import { CartProvider } from "react-use-cart";
import OffersData from "./OffersData";
import OffersCard from "./OffersCard";
import "./Offers.css"
import Navbar from "./components/Navbar/Navbar";

function OffersP(){

    const middleIndex = Math.ceil(OffersData.productdata.length / 2);
  const firstRowData = OffersData.productdata.slice(0, middleIndex);
  const secondRowData = OffersData.productdata.slice(middleIndex);
    return(
        <>
        <Navbar/>
      <div className="bg-light">
        <div className="search-bar p-5">
          <input className="form-control" id='search-input' type="search" placeholder="Search Food with Name"/>
          <button class="btn btn-success" id='search-button' type="submit"><i class="fa fa-search"></i></button>
        </div>
        <h1 class="menu-section-heading mt-3 mb-3 ps-5">Top Offered Dishes from our Restaurant</h1>
      {/* <CartProvider>
        <section className="py-4 container" style={{display: "flex"}} >
        <div className="row de-flex" style={{display: "flex"}}>
          {OffersData.productdata.map((item) => (
            <OffersCard
              key={item.id} 
              id={item.id} 
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              dis={item.dis}
              persentage={item.persentage}
            />
          ))}
        </div>
      </section>
      </CartProvider> */}

    <CartProvider>
          <section className="py-4 container offers-container">
            {firstRowData.map((item) => (
              <OffersCard
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                dis={item.dis}
                persentage={item.persentage}
                className="offers-card"
              />
            ))}
          </section>
          <section className="py-4 container offers-container">
            {secondRowData.map((item) => (
              <OffersCard
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                dis={item.dis}
                persentage={item.persentage}
                className="offers-card"
              />
            ))}
          </section>
        </CartProvider>
      </div>
        <Footer/>
        </>
    )
}
export default OffersP;