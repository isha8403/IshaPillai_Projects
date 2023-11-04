import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <footer id="footer">© 2023-2023<br></br> SKI EVENTS<br></br><Link to="/TandC"  style={{color:'white',textDecoration: "none"}}>Terms and Conditions</Link> | <Link to="/Privacypolicy"  style={{color:'white',textDecoration: "none"}}>PrivacyPolicy</Link>
        </footer>
     </div>
         )
};
export default Footer;