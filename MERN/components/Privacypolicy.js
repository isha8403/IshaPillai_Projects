import React from 'react';
import PreNavbar from './PreNavbar';
import Footer from './Footer';

const Privacypolicy = () => {
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
        <div className="venuecarda">
        <p id="terms">PRIVACY POLICY</p>
    <h3 id="ppimg"><img src={require('../photos/privacy.jpeg')} height={300} width={500} alt="logo" /></h3>
    <p id="tc"> 
      
      This privacy policy applies to our event handling website. We respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your personal information when you use our website.<br></br><br></br>
 <b>Information We Collect</b><br></br>
 We collect information you provide to us when you register for an event, such as your name, email address, and phone number. We may also collect information about your use of our website, such as your IP address, browser type, and operating system.<br></br><br></br>
 
 <b> Use of Your Information</b><br></br>
We use your personal information to process event registrations, communicate with you about events, and improve our website. We do not sell, rent, or share your personal information with third parties for their marketing purposes.<br></br><br></br>
 
<b>Security of Your Information</b><br></br>
 We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.<br></br><br></br>
  
<b>Changes to This Policy</b><br></br>
  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.<br></br><br></br>

 <b>Contact Us</b><br></br>
If you have any questions or concerns about this privacy policy, please contact us at info@eventhandlingwebsite.com.<br></br>
  </p>


  
       </div>
        </div>
          <Footer />
          </>
         )
         
};

export default Privacypolicy;