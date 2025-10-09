import React from "react";
import "./hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={profile_img} alt="Profile" className="hero-image" />

      <h1>
        Hi, I'm <span className="highlight">Avinash Kumar</span>, a frontend
        developer based in India.
      </h1>

      <p>I'm a passionate Full Stack Developer specializing in modern web technologies.</p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          Connect with me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
