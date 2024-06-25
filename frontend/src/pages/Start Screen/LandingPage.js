import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
      <div className="header" id="home">
        <img src="muslim-pilgrimage.png" alt="Kaaba" className="kaaba-image" />
        <h1>Pilgrimage</h1>
        <p>Community-Verified Umrah Planning with Real-Time Guidance</p>
        <button className="sign-up-button">Sign Up Here!</button>
      </div>
      <div className="features" id="features">
        <div className="feature-item">
          <h2>Duas and How to do your Tawwaf!</h2>
          <img src="praying-hands.png" alt="Duas" />
        </div>
        <div className="feature-item">
          <h2>Guidance on where to go</h2>
          <img src="guide-panflip.png" alt="Guidance" />
        </div>
        <div className="feature-item">
          <h2>Real-time location to Masjids near you and Groups!</h2>
          <img src="pin-point.png" alt="RealTimeLocation" />
        </div>
      </div>
      <div className="login">
        <p>Already Signed Up?</p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
