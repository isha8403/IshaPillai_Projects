import React from 'react'
import { NavLink } from "react-router-dom";


const PreNavbar = () => {
    return (
        <div className="preNav">
             <div>
                <NavLink className to='/venue'>Venues</NavLink>
                <NavLink className to='/contact'>ContactUs</NavLink>
                <NavLink className to='/about'>AboutUs</NavLink>
                <NavLink className to='/Signin'>SignIn</NavLink>
                <NavLink className to='/Chatbot'><img src={require('../photos/chatbot.png')} height={30} width={30}/></NavLink>
                
                
             </div>

             <div>
              <h3 id="profile1"> <img src={require('../photos/malelogin.png')} height={50} width={50}></img></h3>
             </div>  
        </div>
    )
}

export default PreNavbar;