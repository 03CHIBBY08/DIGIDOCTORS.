import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
         <p>Our Story</p>
          <h3>Who We Are</h3>
          <p>
            Founded in 2025, DigiDoctor  represents the future 
            of healthcare delivery. We combine advanced digital technology with 
            compassionate medical care to provide an unparalleled healthcare 
            experience.
          </p>
          <p>
            At DigiDoctor, we leverage cutting-edge technology to enhance 
            patient care. Our digital platforms ensure seamless communication, 
            efficient appointment management, and comprehensive health tracking.
          </p>
          <p>
            Our services include:
          </p>
          <ul>
            <li>Telemedicine Consultations</li>
            <li>Digital Health Records Management</li>
            <li>Online Appointment Booking</li>
            <li>24/7 Digital Health Support</li>
            <li>Integrated Patient Care Platform</li>
          </ul>
          <p>
            We're committed to revolutionizing healthcare through innovation 
            while maintaining the human touch that makes medicine meaningful.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
