import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';

const Login = () => {
    return (
      <>
      <PreNavbar/>
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>
      <div>
        <p>WELCOME to LOGIN</p>
           <h1>LOGIN</h1>
          </div>
          <Footer />
          </>
         )
};

export default Login;