import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import BHome from './BHome';
import AfterHome from './pages/Home/AfterHome';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faq from './Faq';
import Homeee from './Homeee.jsx';
import Signup from './Signup.js';
import Signin from './Signin.js';
import AddtoCart from './AddtoCart.js';
import UserProfile from './Profile/PAGES/user/UserProfile.js';
import SellingReport from './SellingReport.js';
import FeedbackReport from './FeedbackReport.js';
import FeedbackForm from './FeedbackForm.js';
import Drivers from './Drivers.js';
import Stats from './Stats.js';
import Notification from './Notification.js';
import Login from './Admin/pages/login/Login.jsx';
import List from './Admin/components/table/Table.jsx';
import Single from './Admin/pages/single/Single.jsx';
import New from './Admin/pages/new/New.jsx';
import Home from "./Admin/pages/home/Home.jsx";
import { DarkModeContext } from "./Admin/context/darkModeContext.js";
import { productInputs, userInputs } from "./formSource";
import AdminSignin from "./AdminSignin.js";
import Itemcard from "./Itemcard.js";
import Cart from "./Cart.js";
import ViewOffers from "./ViewOffers.js";
import CartPage from "./CartPage.js";
import { ToastContainer } from 'react-toastify'; 
import ParentComponent from "./ParentComponent.js";
import Payment from "./Payment.js";
import MenuCard from "./MenuCard.js";
import BookTable from "./BookTable.js";
import Address from "./Address.js";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
import OffersP from "./OffersP.js";
import OffersCard from "./OffersCard.js";
import OffersData from "./OffersData.js";
import User from "./User.js";
import AdminProfile from "./AdminProfile.js";
import AdminProducts from "./AdminProducts.js";
import Menurow from "./Menurow.js";
import Products from "./Products.js";
import AddToCartButton from "./AddToCartButton .js";
import UserDatewise from "./UserDatewise.js";
import AdminAddProducts from "./AdminAddProducts.js";
import Modal from "./Modal.js";
import SellingReportDatewise from "./SellingReportDatewise.js";
import AdminOffers from "./AdminAddOffers.js";
import AdminOffersPage from "./AdminOffersPage.js";
import ForgotPassword from "./ForgotPassword.js";
import DriverSignup from "./DriverSignup.js";
import DriverSignin from "./DriverSignin.js";
import { useState } from "react";
import DriverModule from "./Drivermodule.js";
import BookedTables from "./BookedTables.js";
import ReorderPage from "./ReorderPage.JS";
import Takeaway from "./Takeaway.js";
import AdminForgotPassword from "./AdminForgotPassword.js";
import OrderDetails from "./OrderDetails.js";
import "./App.css"

function App() {
  const { darkMode, toggleDarkMode  } = useContext(DarkModeContext);
  const [userId, setUserId] = useState("yourUserIdHere");


  return (
    <RecoilRoot> 
      
      <div className={darkMode ? "app dark" : "app"}>
      <div className="bottom">
        <div className="colorOption" onClick={toggleDarkMode}></div>
        <div className="colorOption" onClick={toggleDarkMode}></div>
      </div>
        <Routes>
          <Route path="/" element={<BHome />} />
          <Route path="/Home/OrderDetails" element={<OrderDetails />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/AdminForgotPassword" element={<AdminForgotPassword />} />
          <Route path="/Signin/BHome" element={<BHome />} />
          {/* <Route path="/AfterHome" element={<AfterHome />} /> */}
          <Route path="/AfterHome" element={<AfterHome userId={userId} />} />
          <Route path="/AdminProducts" element={<AdminProducts />} />
          <Route path="/Home/BookedTables" element={<BookedTables />} />
          <Route path="/AdminOffers" element={<AdminOffers />} />
          <Route path="/AdminOffersPage" element={<AdminOffersPage />} />
          <Route path="/AdminAddProducts" element={<AdminAddProducts />} />
          <Route path="/DriverSignup" element={<DriverSignup />} />
          <Route path="/DriverModule" element={<DriverModule />} />
          <Route path="/DriverSignin" element={<DriverSignin />} />
          <Route path="/Home/AdminProfile" element={<AdminProfile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Menurow" element={<Menurow />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddToCartButton" element={<AddToCartButton />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/ParentComponent" element={<ParentComponent />} />
          <Route path="/Homeee" element={<Homeee />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/MenuCard" element={<MenuCard />} />
          <Route path="/BookTable" element={<BookTable />} />
          <Route path="/ViewOffers" element={<ViewOffers />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/menu/AddtoCart" element={<AddtoCart />} />
          <Route path="/UserProfile" element={<UserProfile />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Takeaway" element={<Takeaway />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="SellingReport" element={<SellingReport />} />
          <Route path="/Home/SellingReportDatewise" element={<SellingReportDatewise />} />
          <Route path="Home/FeedbackReport" element={<FeedbackReport />} /> 
          <Route path="FeedbackForm" element={<FeedbackForm />} /> 
          <Route path="/Home/Drivers" element={<Drivers />} /> 
          <Route path="/Payment" element={<Payment />} /> 
          <Route path="/UserProfile/ReorderPage" element={<ReorderPage />} /> 
          <Route path="/UserProfile/Payment" element={<Payment />} /> 
          <Route path="/menu/Payment" element={<Payment />} /> 
          <Route path="/Home/Stats" element={<Stats/>} /> 
          <Route path="/Notification" element={<Notification />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/OffersP" element={<OffersP />} />
          <Route path="/OffersCard" element={<OffersCard />} />
          <Route path="/OffersData" element={<OffersData />} />
          <Route path="/AdminSignin" element={<AdminSignin />} />
          <Route path="/ViewOffers/Payment" element={<Payment />} />
          <Route path="/List" element={<List />}/>
          <Route path="/User" element={<User />}/>
          <Route path="/UserDatewise" element={<UserDatewise />}/>
          <Route path="Itemcard" element={<Itemcard />}>
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="products" element={<List />}>
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
        </Routes>
        <ToastContainer /> 
      </div>
    </RecoilRoot>
  );
}

export default App;
