import React from 'react'
import { Route,Routes} from "react-router-dom";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Homepage from "./components/Homepage";
import Venues from "./components/Venues";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/Aboutus";
import Signin from "./components/Signin";
import Explore from './components/Explore';
import Wedding from "./components/Wedding";
import Reception from "./components/Reception";
import BirthdayCeleb from "./components/BirthdayCeleb.js";
import LaunchEvent from "./components/LaunchEvent";
import GetTogether from "./components/GetTogether";
import Others from "./components/Others";
import Privacypolicy from "./components/Privacypolicy";
import Footer from "./components/Footer";
import TandC from "./components/TandC";
import Book from "./components/Book";
//import generateOTP from "./components/generateOTP";
import Darkaboutus from './components/Darkaboutus';
import Chatbot from './components/Chatbot';


function App (){
  return (
    <>
    <Routes>
    <Route path='nav' element={<PreNavbar/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='venue' element={<Venues/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='explore1' element={<Explore/>}/>
      <Route path='wedding' element={<Wedding/>}/>
      <Route path='reception' element={<Reception/>}/>
      <Route path='birthdayceleb' element={<BirthdayCeleb/>}/>
      <Route path='launchevent' element={<LaunchEvent/>}/>
      <Route path='gettogether' element={<GetTogether/>}/>
      <Route path='others' element={<Others/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='Privacypolicy' element={<Privacypolicy/>}/>
      <Route path='TandC' element={<TandC/>}/>
      <Route path='Book' element={<Book/>}/>
      <Route path='Darkaboutus' element={<Darkaboutus/>}/>
      <Route path='Chatbot' element={<Chatbot/>}/>
      
      

    
    
    </Routes>
    </>
    )
};
export default App
