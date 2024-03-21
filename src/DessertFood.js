import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "react-use-cart";
import DessertsHome from "./DessertsHome";

function DessertFood(){
    return(
        <>
        <Navbar/>
        <h1 class="menu-section-heading ps-5 pt-4">Desserts Food Page</h1>
        <CartProvider>
          <DessertsHome></DessertsHome>
        </CartProvider>
        <Footer/>
        </>
    )
}
export default DessertFood;