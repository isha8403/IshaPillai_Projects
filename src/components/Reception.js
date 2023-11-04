import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";

const Reception = () => {
    return (
      <>
      <PreNavbar/>
      <div className = "title"> 
      <p id='align'>India's Finest Halls</p>
  </div>

  <div className="title2">
      <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
  </div>
  <div className='recepcard'>

    <div id="recepcard1">
      <h3 id="recepmargin1"><img src={require('../photos/r1.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps?q=Seven+Seas+Hotel+Sector+3,+Rohini,+Delhi,+India&rlz=1C1ONGR_enIN966IN966&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjXl7f4rLP9AhWi4TgGHRmsASwQ_AUoAXoECAIQAw" id="recepmap1"> 📌
      Seven Seas Hotel, New Delhi, India</a>
      <p id="recepmap1"> Rate: ₹8,000/day<br></br>CATERING FACILITIES Veg: ₹2,000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹2,200/plate </p>
      <Link to="/book" id="recepbooknow">Book Now</Link>
    </div>

    <div id="recepcard2">
      <h3 id="recepmargin2"><img src={require('../photos/r2.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps/place/The+Grand+Horizon+Banquet/@28.6619299,77.1492098,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03e37f5b9103:0xadb8935e97346397!8m2!3d28.6619299!4d77.1513985!16s%2Fg%2F11f7r7n2c9" id="recepmap2"> 
      📌The Grand Horizon Banquet, India</a>
      <p id="recepmap2"> Rate: ₹5,000/day<br></br>CATERING FACILITIES Veg: ₹1,000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,500/plate </p>
      <Link to="/book" id="recepbooknow">Book Now</Link>
    </div>

    <div id="recepcard3">
      <h3 id="recepmargin3"><img src={require('../photos/r3.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps/place/Mumbai+Metro+The+Executive+Hotel/@19.1047052,72.8844085,17z/data=!3m1!4b1!4m9!3m8!1s0x3be7c86df662b83d:0x16e5c4ba1cdd61ba!5m2!4m1!1i2!8m2!3d19.1047052!4d72.8865972!16s%2Fg%2F1tfr_jp7" id="recepmap3"> 📌
      Mumbai Metro, The Executive Hotel</a>
      <p id="recepmap3"> Rate: ₹9,000/day<br></br>CATERING FACILITIES Veg: ₹900/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,000/plate </p>
      <Link to="/book" id="recepbooknow">Book Now</Link>
    </div>
    </div>

    <div className="card7">
      <br></br>
      <h3 id="follow">FOLLOW US ON / DOWNLOAD THE SKIEVENT APP</h3>
      <h3 id="im"><img src={require('../photos/followus.png')} height={245} width={190} alt="logo" /></h3>
      <p id="imm"><img src={require('../photos/downloadapp.png')} height={245} width={200} alt="logo" /></p>
    </div>
    
     <Footer/>  
    </>
    )
};

export default Reception;