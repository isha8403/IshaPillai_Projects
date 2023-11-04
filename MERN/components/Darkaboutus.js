import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';



const Darkaboutus = () => {
  return (
    <>
    <PreNavbar />
    <div className="darktheme">

    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>

    <div className="venuecardd" style={{
        backgroundColor: 'black'}}>

    <p id="daboutus">ABOUT US</p>
    <h3 id="aboutimg"><img src={require('../photos/bbaboutus.png')} height={400} width={600} alt="logo" /></h3>
    <p id="dtc">India's favourite event planning website & app with over 1.5 millon monthly dedicated users. ​SkiEvent is​ a ​swanky alternative to the outdated event planning process. A one-stop-shop for all things events, you can find
        inspiratio​​n​, ​ideas ​and vendors within​ your​ budget​. SkiEvent has been trusted by over 2​​ m​illio​n brides & grooms​ all over the world​ to plan their big day.​ So sit back, log on to SkiEvent, and ​plan the event of your dreams​!<br></br><br></br>
        Make Planning decisions
        Vendors<br></br>
        From photographers to event priests, SkiEvent has 80,000+ active vendors for you to choose from. Browse their portfolio, prices, genuine client reviews & much more to do your research and book just about any event vendor you might require.<br></br><br></br>
        WMG Bridal Gallery / Shop<br></br>
        The WMG Bridal Gallery is your one-stop event shop. Choose from 2000+ outfits and chat with the designer's team directly to find the outfit of your dreams. Kick-start your event shopping here from the comfort of your home!<br></br>
        Genie<br></br>
<br></br> WMG Genie services can help you find the right vendor to fit your budget & style! Our Genie expert saves you the time & hassle of browsing through hundreds of profiles by suggesting only the most relevant vendors for your specific requirements.<br></br>
        SkiEvent Mynt<br></br><br></br>
        An exclusive loyalty program by SkiEvent for our brides-to-be and grooms-to-be, this allows access to special offers and benefits from 100+ premium brands across various categories like bridal wear, travel, jewellery, beauty and more!</p>



</div>
<div id="dark">
  <Link to="/about"><img src={require('../photos/darkmode.png')} height={35} width={35} />
  </Link>
  </div>
    
    <div className="card7" >
      <br></br>
      <h3 id="follow">FOLLOW US ON / DOWNLOAD THE SKIEVENT APP</h3>
      <h3 id="im"><img src={require('../photos/followus.png')} height={245} width={190} alt="logo" /></h3>
      <p id="imm"><img src={require('../photos/downloadapp.png')} height={245} width={200} alt="logo" /></p>
    </div>
     

     <Footer />
     </div>
    
        
   
    </>
  )
}

export default Darkaboutus