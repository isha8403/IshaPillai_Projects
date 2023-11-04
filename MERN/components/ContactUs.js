import PreNavbar from './PreNavbar';
//import Captcha from './Captcha';
import React, { useState } from 'react'
//import { Link } from "react-router-dom";
import Footer from './Footer';

const ContactUs = () => {
  const [credentials, setcrendentials] = useState({name:"", email:"", num:"", message:""});
  

  console.log(credentials)
  
  
  const onChange=(event) => {
    let name = event.target.name;
    let value = event.target.value;

    setcrendentials(() => {
      return{
        ...credentials,
        [name] : value
      }
    })
  };
  const handleSubmit = async(e) =>
  {
    e.preventDefault();
    const {name,email,num,message} = credentials;
    const response = await fetch("/contactus", 
    {
      method: "POST",
      headers: {
                  'Content-Type':'application/json'
      },
      body:JSON.stringify({name, email, num, message})
    });

    


    const json = await response.json()
    console.log(json);
   /* if (book) {
    
      window.alert('Data Punched in!!');
     }*/

     window.alert('Data Punched in!!');
  }

    return (
      <>
    <PreNavbar/>
    
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>

    <div className='venuecardc'>
        <h3 id="contactimg"></h3>
    <form method="POST">
        <p id="contactus">Contact Us</p>
        
        <input
          value={credentials.name}
          onChange={onChange}
          placeholder="Please Enter Your Name"
          type="text"
          name="name"
          id="name"
          autocomplete="off"
        />

        <input
          value={credentials.email}
          onChange={onChange}
          placeholder="Please Enter Email ID"
          type="email"
          name="email"
          id="email"
          autocomplete="off"
        />

        <input
          value={credentials.num}
          onChange={onChange}
          placeholder="Please Enter Your Phone Number"
          type="number"
          name="num"
          id="num"
          autocomplete="off"
        />

        <input
          value={credentials.message}
          onChange={onChange}
          placeholder="Please Give Your Feedback"
          type="textarea"
          name="message"
          id="message"
          autocomplete="off"
        />
        <br></br>
        <button type="submit" onClick ={handleSubmit} id="contactbutton">Submit</button>
</form>
          
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
};

export default ContactUs;