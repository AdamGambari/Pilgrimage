import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <img src="muslim-pilgrimage.png" alt="Kaaba" className="kaaba-image" />
        <h1>Pilgrimage</h1>
        <p>Community-Verified Umrah Planning with Real-Time Guidance</p>
        <button className="sign-up-button">Sign Up Here!</button>
      </div>
      <div className="features">
        <div className="feature-item">
          <h2>Duas and How to do your Tawwaf!</h2>
          <img src="praying-hands.png" alt="Duas" />
        </div>
        <div className="Guidances">
          <h2>Guidance on where to go</h2>
          <img src="path_to_guidance_image" alt="Guidance" />
        </div>
        <div className="feature-item">
          <h2>Real time location to Masjids near you and Groups!</h2>
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
