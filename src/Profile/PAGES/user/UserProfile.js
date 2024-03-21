import React from 'react'
import { useParams } from 'react-router-dom'


import SingleBanner from '../../COMPONNETS/Banners/SingleBanner'
import AccountSettings from '../../COMPONNETS/UserProfile/AccountSettings'
import './UserProfile.css'

import YourOrders from '../../COMPONNETS/UserProfile/YourOrders'
import UserAddress from "../../COMPONNETS/UserProfile/UserAddress"
import HeroImage from '../../../components/HeroImage/HeroImage'
import bgImage from "../../../assets/pizza.jpeg";
import Navbar from '../../../components/Navbar/Navbar'

const UserProfile = () => {

    const {activepage} = useParams()


  return (
    <>
    <Navbar/> 
        <HeroImage
        bgImage={bgImage}
        heading={[" ", <span style={{color: "white"}}> User Profile</span>]}
      />
    <div className='userprofile'>
            
        {/* <SingleBanner 
        
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        /> */}
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
           {/* <div className='left'>
              <UserSidebar activepage={activepage}/>
        </div> */}
            <div className='right'>
            <AccountSettings activepage={activepage}/>
            <YourOrders activepage={activepage}/>
           {/* <LegalNotice activepage={activepage}/> */}
            {/* <UserAddress activepage={activepage}/> */}
            
            
             {/* {activepage === 'accountsettings' && <AccountSettings/>} 
              {activepage == 'changepassword' && <ChangePassword/>}
              {activepage == 'yourorders' && <YourOrders/>}
              {activepage == 'address' && <UserAddress/>}
        {activepage == 'legalnotice' && <LegalNotice/>} */}
            </div>
         </div>
       {/*} <Footer1/>
        <Footer2/>*/}
        </div>
        </>
  )
}

export default UserProfile