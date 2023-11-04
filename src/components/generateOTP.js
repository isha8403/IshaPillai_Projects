import React from 'react';
//import { Link } from "react-router-dom";
import Footer from './Footer';
import PreNavbar from './PreNavbar';


export function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
  
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
  
    return OTP;
  }

  export  default generateOTP ;