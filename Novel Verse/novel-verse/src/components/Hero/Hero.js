//Hero.js

import React from "react";
import "./Hero.scss"; // Styles
import heroImage from "../../assets/images/Hero.jpg"; // Path to the image

const Hero = () => {
  return (
    <div className="hero">
      {/* Displaying the hero image */}
      <img src={heroImage} alt="Hero" className="hero-image" />

      {/* Hero text content */}
      <div className="hero-text">
        {/* Main title */}
        <h1>Welcome to Novel Verse</h1>

        {/* Subtitle */}
        <p>Discover the world of stories and imagination.</p>
      </div>
    </div>
  );
};

export default Hero;
