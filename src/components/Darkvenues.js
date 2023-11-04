import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";

const Darkvenues = () => {
    return (
      <>

      <PreNavbar/>
      <div className="darktheme">
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>
    <div className='vcard'>

      <div id="venuecard1">
        <h3 id="margin1"><img src={require('../photos/v1.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Stellar+Resorts/@28.5224047,77.0977915,17z/data=!3m1!4b1!4m9!3m8!1s0x390d1b116a7c7e19:0x71a8c2deab18aa3c!5m2!4m1!1i2!8m2!3d28.5224047!4d77.1003664!16s%2Fg%2F11rccxj_8v" id="map1"> 📌
Rajokri, Stellar Resorts, NH8, New Delhi, India</a>
        <p id="map1"> Rate: ₹8,000/day<br></br>CATERING FACILITIES Veg: ₹2,000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹2,200/plate </p>
        <p id="map1">44 Rooms &nbsp;&nbsp;&nbsp; 650 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard2">
        <h3 id="margin2"><img src={require('../photos/v2.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Radisson+Blu+Hotel,+New+Delhi+Dwarka/@28.5956097,77.0356662,18z/data=!3m1!4b1!4m9!3m8!1s0x390d1ac859725435:0xa9c1ca76b55708f!5m2!4m1!1i2!8m2!3d28.5964764!4d77.0362777!16s%2Fg%2F1tdmhw37" id="map2"> 
        📌Radisson Blu Dwarka, Dwarka, Delhi NCR</a>
        <p id="map2"> Rate: ₹5,000/day<br></br>CATERING FACILITIES Veg: ₹1,000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,500/plate </p>
        <p id="map2">80 Rooms &nbsp;&nbsp;&nbsp; 900 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard3">
        <h3 id="margin3"><img src={require('../photos/v3.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Hotel+Hilltop+Palace/@24.5905607,73.6790414,17z/data=!3m1!4b1!4m9!3m8!1s0x3967ef878151b84b:0x652801204d41735a!5m2!4m1!1i2!8m2!3d24.5905607!4d73.6812301!16s%2Fg%2F1tjff7d3" id="map3"> 📌
        Hotel Hilltop Palace, Udaipur, Rajasthan</a>
        <p id="map3"> Rate: ₹9,000/day<br></br>CATERING FACILITIES Veg: ₹900/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,000/plate </p>
        <p id="map3">90 Rooms &nbsp;&nbsp;&nbsp; 1000 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard4">
        <h3 id="margin4"><img src={require('../photos/v4.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Resort+De+Coracao+-+Calangute+,Goa/@15.5357967,73.762222,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbfc1e5c3cbc58d:0xaff63729b3184061!5m2!4m1!1i2!8m2!3d15.5357967!4d73.7644107!16s%2Fg%2F1trtsryk" id="map4"> 📌
        Resort De Coracao, Calangute, Goa</a>
        <p id="map4"> Rate: ₹6,000/day<br></br>CATERING FACILITIES Veg: ₹850/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹900/plate </p>
        <p id="map4">70 Rooms &nbsp;&nbsp;&nbsp; 800 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard5">
        <h3 id="margin5"><img src={require('../photos/v5.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/The+Tamarind+Tree/@12.8642576,77.5610569,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae4df6e4000001:0x2efc2fc7cf820a07!8m2!3d12.8642576!4d77.5632456!16s%2Fg%2F1tdj_0nk" id="map5"> 📌
        The Tamarind Tree, South Bangalore, Bangalore</a>
        <p id="map5"> Rate: ₹7,500/day<br></br>CATERING FACILITIES Veg: ₹800/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹850/plate </p>
        <p id="map5">80 Rooms &nbsp;&nbsp;&nbsp; 900 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard6">
        <h3 id="margin6"><img src={require('../photos/v6.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Umaid+Bhawan+Palace,+Jodhpur/@26.2810298,73.0451135,17z/data=!3m1!4b1!4m9!3m8!1s0x39418cfa2d57b3f7:0xccd024507880be71!5m2!4m1!1i2!8m2!3d26.2810298!4d73.0473022!16zL20vMDVnMnl4" id="map6"> 📌
        Umaid Bhawan Palace, Cantt Area, Jodhpur</a>
        <p id="map6"> Rate: ₹20,000/day<br></br>CATERING FACILITIES Veg: ₹900/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,000/plate </p>
        <p id="map6">200 Rooms &nbsp;&nbsp;&nbsp; 4000 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>
      
      <div id="venuecard7">
        <h3 id="margin7"><img src={require('../photos/v7.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Chandan+Lawns/@19.0459669,72.9088065,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7d01df0fd2f:0xa00866e39e6df13a!8m2!3d19.0459669!4d72.9109952!16s%2Fg%2F11t7drrsyh" id="map7"> 📌
        Chandan Lawns, Suburbs, Mumbai</a>
        <p id="map7"> Rate: ₹10,000/day<br></br>CATERING FACILITIES Veg: ₹500/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹600/plate </p>
        <p id="map7">50 Rooms &nbsp;&nbsp;&nbsp; 300 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard8">
        <h3 id="margin8"><img src={require('../photos/v8.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Celebrity+Resort/@17.5795397,78.5708871,17z/data=!3m1!4b1!4m9!3m8!1s0x3bcb99cd87dc821b:0x3fb69cb3e117e014!5m2!4m1!1i2!8m2!3d17.5795397!4d78.5730758!16s%2Fg%2F1tkrk7s9" id="map8"> 📌
        Celebrity Resort, Shamirpet, Hyderabad</a>
        <p id="map8"> Rate: ₹7,000/day<br></br>CATERING FACILITIES Veg: ₹700/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹800/plate </p>
        <p id="map8">40 Rooms &nbsp;&nbsp;&nbsp; 200 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>

      <div id="venuecard9">
        <h3 id="margin9"><img src={require('../photos/v9.jpeg')} height={163} width={363} alt="logo" /></h3>
        <a href="https://www.google.com/maps/place/Taj+Wellington+Mews,+Chennai/@12.9910843,80.2479694,17z/data=!3m1!4b1!4m9!3m8!1s0x3a5267766d4eddf3:0xbe3f7dba4225fa8c!5m2!4m1!1i2!8m2!3d12.9910843!4d80.2501581!16s%2Fg%2F11frsyt8fh" id="map9"> 📌
        Taj Wellington Mews, Chennai</a>
        <p id="map9"> Rate: ₹5,000/day<br></br>CATERING FACILITIES Veg: ₹1000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,100/plate </p>
        <p id="map9">90 Rooms &nbsp;&nbsp;&nbsp; 1000 Occupancy &nbsp;&nbsp;&nbsp; </p>
        <Link to="/book" id="booknow">Book Now</Link>
      </div>
    </div>
    <div id="dark">
  <Link to="/venue"><img src={require('../photos/darkmode.png')} height={35} width={35} />
  </Link>
  </div>

    <div className="card7">
      <br></br>
      <h3 id="follow">FOLLOW US ON / DOWNLOAD THE SKIEVENT APP</h3>
      <h3 id="im"><img src={require('../photos/followus.png')} height={245} width={190} alt="logo" /></h3>
      <p id="imm"><img src={require('../photos/downloadapp.png')} height={245} width={200} alt="logo" /></p>
    </div>
     <Footer />  
     </div>
    </>
         )
};

export default Darkvenues;