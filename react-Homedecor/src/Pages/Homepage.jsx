import React from 'react';
import './Auth.css';
import Navbar from '../Components/Navbar';
<img src="/img1.jpg" alt="Interior Design 1" />


function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="hero-section">
          <div className="hero-left">
            <img src={img1} alt="Sketch & Photo" />
          </div>
        </div>

        <div className="hero-text">
          <h2>Discover your home as you want - Ghar Sansar</h2>
        </div>

        <div className="below-images">
          <img src={img2} alt="Decor 1" />
          <img src={img3} alt="Decor 2" />
        </div>
      </div>
    </>
  );
}

export default Homepage;