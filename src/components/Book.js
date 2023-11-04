import React, { useState } from 'react';
import { generateOTP } from './generateOTP'; // assuming you have a module for generating OTPs
import Footer from './Footer';
import PreNavbar from './PreNavbar';

function HallBookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [otp, setOTP] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const generatedOTP = generateOTP(); // assuming generateOTP is a function that generates a random OTP
    setOTP(generatedOTP);
  };

  const handleConfirmation = (event) => {
    event.preventDefault();
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    
      window.alert('Booking confirmed!\n'+'Your OTP is: '+ otp);
  }

  return (
    <div>
    <PreNavbar/>
    <div className = "title"> 
        <p id='align'>India's Finest Halls</p>
    </div>

    <div className="title2" >
        <h3 id = "setlogo"><img src={require('../photos/logo.png')} height={70} width={200} alt="logo" /> </h3>
    </div>
    <div className="venuecardb">
      <p id="hall">Hall Booking</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"  id="llname">Name:</label>
        <input type="text" id="bname" textarea rows="1" value={name} onChange={(event) => setName(event.target.value)} />
        
        <label htmlFor="date" id="lldate">Date:</label>
        <input type="date" id="bdate" value={date} onChange={(event) => setDate(event.target.value)} />

        <label htmlFor="start-time" id="sstime">Start-time:</label>
        <input type="time" id="starttime" value={startTime} onChange={(event) => setStartTime(event.target.value)} />

        <label htmlFor="end-time" id="etime">End-time:</label>
        <input type="time" id="endtime"  value={endTime} onChange={(event) => setEndTime(event.target.value)} />

        <button type="submit" id="bsubmit">Generate OTP</button>
      </form>

      {otp && (
        <form onSubmit={handleConfirmation}>
          <label htmlFor="otp" id="ootp">OTP:</label>
          <input type="text" id="otp" value={otp} onChange={(event) => setOTP(event.target.value)} />

          <button type="submit" id="cbutton">Confirm booking</button>
        </form>
      )}
      </div>
      <div className="card7">
      <br></br>
      <h3 id="follow">FOLLOW US ON / DOWNLOAD THE SKIEVENT APP</h3>
      <h3 id="im"><img src={require('../photos/followus.png')} height={245} width={190} alt="logo" /></h3>
      <p id="imm"><img src={require('../photos/downloadapp.png')} height={245} width={200} alt="logo" /></p>
    </div>
     <Footer /> 
    </div>
    
  );
}

export default HallBookingForm;


/*import PreNavbar from './PreNavbar';
import React, { useState } from 'react'
import Footer from './Footer';

const Book = () => {
  const [credentials, setcrendentials] = useState({name:"", email:"", num:"", date:"", stime:"", etime:""});
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
    const {name,email,num,date,stime,etime} = credentials;
    const response = await fetch("/book", 
    {
      method: "POST",
      headers: {
                  'Content-Type':'application/json'
      },
      body:JSON.stringify({name,email,num,date,stime,etime})
    });
    const json = await response.json()
    console.log(json);
    if(!json.success){
      alert("Enter valid Input")
    }
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

    <div className='venuecard'>
    <form method="POST">
        <p id="Book">Contact Us</p>
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
          name="tel"
          id="num"
          autocomplete="off"
        />

        <input
          value={credentials.date}
          onChange={onChange}
          placeholder="Please Enter Your Phone Number"
          type="date"
          name="date"
          id="date"
          autocomplete="off"
        />

        <input
          value={credentials.stime}
          onChange={onChange}
          placeholder="Please Enter Your Phone Number"
          type="time"
          name="stime"
          id="stime"
          autocomplete="off"
        />

<input
          value={credentials.etime}
          onChange={onChange}
          placeholder="Please Enter Your Phone Number"
          type="time"
          name="etime"
          id="etime"
          autocomplete="off"
        />
        
        <button type="submit" id ="book"onClick ={handleSubmit}>Book</button>
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

export default Book;*/