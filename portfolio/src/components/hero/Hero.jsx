import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>I'm Alex Bennett, frontend developer based in USA.</h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
