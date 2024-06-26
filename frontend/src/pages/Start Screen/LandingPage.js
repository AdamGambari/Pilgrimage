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
        </ul>

  
        <div className="login">
        <button className="login-button">Login</button>
      </div>

      <div className="alr">
        <p>Already Signed Up?</p>
      </div>

      </nav>

      <div className="kaaba" id="kaaba">
        <div className="kaaba">
          <img src="muslim-pilgrimage.png" alt="kaaba" />
          </div>
        </div>

        <div className="guide-pan">
          <img src="guide-panflip.png" alt="Guidance" />
        </div>

        <div className="guide-mark" id="guide-mark">
        <div className="guide-mark">
          <img src="guide-mark.png" alt="kaaba" />
          </div>
        </div>

      <div className="header" id="home">
        <h1>Pilgrimage</h1>
        <p>Community-Verified Umrah Planning with Real-Time Guidance</p>
        <button className="sign-up-button">Sign Up Here!</button>
      </div>

    
      <div className="praying-hand" id="praying-hand">
        <div className="praying">
          <img src="praying-hand.png" alt="Duas" />
          <h2>Duas and How to do your Tawwaf!</h2>
        </div>

        <div className="pin-point">
          <img src="pin-point.png" alt="RealTimeLocation" />
          <h2>Real-time location to Masjids near you and Groups!</h2>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
