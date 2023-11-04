import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import PreNavbar from './PreNavbar';


const Homepage = () => {
  return (
    <>
    <PreNavbar/>
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>

    <div className='carde'>
            <h2 id='center'>
              Browse 1000+ halls & find <br></br>the perfect one
              <h3 id="explore">
              <Link to="/explore1">Explore</Link>
              </h3>
            </h2>
            <h3 id = "imp"><img src={require('../photos/carde.jpeg')} height={253} width={550} alt="logo" /> </h3>
    </div>

    <div className = "card">
        <h3 id = "imp"><img src={require('../photos/homepagehall.jpg')} height={617} width={1473.5} alt="logo" /> </h3>
        <h2 id ="centered">Plan An Event Now!!!</h2>
    </div>

    <div>
        <h3 id="eve"> EVENT CATEGORIES</h3>
        <div className="card1">
              <Link to="/wedding" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Wedding</Link>
        </div>

        <div className="card2">
              <Link to="/reception" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Reception</Link>
        </div>

        <div className="card3">
              <Link to="/birthdayceleb" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Birthday Celebration</Link>
        </div>

        <div className="card4">
              <Link to="/launchevent" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Launch Event</Link>
        </div>

        <div className="card5">
              <Link to="/gettogether" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Get Together</Link>
        </div>

        <div className="card6">
              <Link to="/others" style={{color:'white',textDecoration: "none"}}><br></br><br></br>Others</Link>
        </div>
    </div> 
    

    <div className="card7">
      <br></br>
      <h3 id="follow">FOLLOW US ON / DOWNLOAD THE SKIEVENT APP</h3>
      <h3 id="im"><img src={require('../photos/followus.png')} height={245} width={190} alt="logo" /></h3>
      <p id="imm"><img src={require('../photos/downloadapp.png')} height={245} width={200} alt="logo" /></p>
    </div>
     <Footer />  
    </>
  )
}

export default Homepage //default