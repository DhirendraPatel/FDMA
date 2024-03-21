import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Foodie</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="">
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          
          <Link to="/AdminAddProducts" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Add-Products</span>
            </li>
          </Link>


          <p className="title">LISTS</p>
          
          <Link to="/User" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>User</span>
            </li>
          </Link>

          <Link to="/AdminProducts" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/AdminOffersPage">
          <li>
            <CreditCardIcon className="icon" />
            <span>Offers</span>
          </li> 
          </Link>

          <Link to="/SellingReport">
          <li>
            <TrendingUpIcon className="icon" />
            <span> Selling Report</span>
          </li>
          </Link>

          <Link to="Drivers">
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery Drivers</span>
          </li>
          </Link>

          <Link to="FeedbackReport">
          <li>
            <ChatBubbleOutlineIcon />
            <span>Feedback Report</span>
          </li>
          </Link>
          <Link to="BookedTables">
          <li>
            <ChatBubbleOutlineIcon />
            <span>Booking Tables</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="Stats">
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          </Link>
          {/* <Link to="/Notification">
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link> */}
          <Link to="OrderDetails">
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Order Details</span>
          </li>
          </Link>
          {/* <p className="title">SERVICE</p> */}
          <p className="title">USER</p>
          <Link to="AdminProfile">
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/">
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
