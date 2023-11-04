import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";

const BirthdayCelebration = () => {
    return (
      <>
      <PreNavbar/>
      <div className = "title"> 
      <p id='align'>India's Finest Halls</p>
  </div>

  <div className="title2" >
      <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
  </div>
  <div className='bdaycard'>

    <div id="bdaycard1">
      <h3 id="bdaymargin1"><img src={require('../photos/b1.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps/place/Vaishali+Hall+,+Chembur/@19.0617604,72.8844635,15z/data=!4m10!1m2!2m1!1sbirthday+hall!3m6!1s0x3be7c61fa3900001:0x992a483fd32924fe!8m2!3d19.0617604!4d72.900943!15sCg1iaXJ0aGRheSBoYWxsWg8iDWJpcnRoZGF5IGhhbGySAQxiYW5xdWV0X2hhbGyaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkNOelo2YjFwQkVBReABAA!16s%2Fg%2F11clwbbrh5?hl=en" id="bdaymap1"> 📌
Vaishali Hall, Chembur, Mumbaai, India</a>
      <p id="bdaymap1"> Rate: ₹5,000/day<br></br>CATERING FACILITIES Veg: ₹900/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,000/plate </p>
      <p id="bdaybooknow">Book Now</p>
    </div>

    <div id="bdaycard2">
      <h3 id="bdaymargin2"><img src={require('../photos/b2.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps/place/Hope+Party+Hall/@19.0816834,72.8698674,15z/data=!3m1!5s0x3be7c61619f8b259:0x70228ec95dcc2829!4m10!1m2!2m1!1shope+hall+chembur!3m6!1s0x3be7c904ae73af13:0x4c078174b0a620b1!8m2!3d19.0816834!4d72.8863469!15sChFob3BlIGhhbGwgY2hlbWJ1cloTIhFob3BlIGhhbGwgY2hlbWJ1cpIBDGJhbnF1ZXRfaGFsbJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOdE9VdGlSWFIzUlJBQuABAA!16s%2Fg%2F11nxc6j07_" id="bdaymap2"> 
      📌Hope Party Hall, Mumbai</a>
      <p id="bdaymap2"> Rate: ₹3,000/day<br></br>CATERING FACILITIES Veg: ₹700/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹800/plate </p>
      <p  id="bdaybooknow">Book Now</p>
    </div>

    <div id="bdaycard3">
      <h3 id="bdaymargin3"><img src={require('../photos/b3.jpeg')} height={163} width={363} alt="logo" /></h3>
      <a href="https://www.google.com/maps/search/hope+hall+chembur/@19.0744796,72.8869815,15z/data=!3m1!4b1" id="bdaymap3"> 📌
      Diamond Banquet Hall, Mumbai</a>
      <p id="bdaymap3"> Rate: ₹6,000/day<br></br>CATERING FACILITIES Veg: ₹1,000/plate <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Veg: ₹1,200/plate </p>
      <p id="bdaybooknow">Book Now</p>
      </div>
    </div>
    <h2 id="notavl" align="center"> CURRENTLY UNAVAILABLE</h2>

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

export default BirthdayCelebration;