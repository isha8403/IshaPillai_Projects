import React, {useState} from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Captcha from './Captcha';
//import Homepage from './Homepage';

//import {NavLink} from 'react-router-dom';
//import wed from "../photos/wed.jpeg";

const Signin = ()=> {

  const [credentials, setcrendentials] = useState({fname:"", lname:"", loc:"", email:"", pass:"", num:""});
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
    const {fname, lname, loc, email, pass, num} = credentials;
    const response = await fetch("/signin", 
    {
      method: "POST",
      headers: {
                  'Content-Type':'application/json'
      },
      body:JSON.stringify({fname, lname, loc, email, pass, num })
    });
    const json = await response.json()
    console.log(json);
    /*if(!json.success){
      alert("Enter valid Input")
    }*/
    
      window.alert('Signed in Successfully!');

    
    
  }
  /*function myFunction() {
    alert("I am an alert box!");
  }*/
 

  return (
    <>
      
      <PreNavbar />
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>
    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>

  
    <div className="venuecardsignin">
   
            <div className='signinimg'>
              <img src={require('../photos/wed.jpeg')} alt="wed"/>
             </div>   
    
        
     
    
      <form method="POST" action="/Homepage">
        <p id="signin">Sign In/Sign Up</p>
        <input
          value={credentials.fname}
          onChange={onChange}
          placeholder="Enter First Name"
          type="text"
          name="fname"
          id="fname"
          autocomplete="off"
        />
        <input
          value={credentials.lname}
          onChange={onChange}
          placeholder="Enter Last Name"
          type="text"
          name="lname"
          id="lname"
          autocomplete="off"
        />
        <input
          value={credentials.loc}
          onChange={onChange}
          placeholder="Enter Location"
          type="text"
          name="loc"
          id="loc"
          autocomplete="off"
        />
        <input
          value={credentials.email}
          onChange={onChange}
          placeholder="Enter Email ID"
          type="email"
          name="email"
          id="emailid"
          autocomplete="off"
        />
        <input
          value={credentials.pass}
          onChange={onChange}
          placeholder="Enter Password"
          type="password"
          name="pass"
          id="pass"
          autocomplete="off"
        />
    
        <input
          value={credentials.num}
          onChange={onChange}
          placeholder="Enter Phone Number"
          type="number"
          name="num"
          id="number"
          autocomplete="off"
        />
        <div id="cap">
        <Captcha />
        </div>
      
        <button id="submit" onClick ={handleSubmit} >
        Sign In
        </button>
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
  
}

export default Signin;


