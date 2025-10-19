import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const words = ['I build websites', 'React JS Developer', 'UI/UX Enthusiast', 'Open Source Contributor'];

const Hero = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex % words.length];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <section className="hero">
      <div className="hero-bg-circle circle1"></div>
      <div className="hero-bg-circle circle2"></div>

      <img src={profile_img} alt="Alex Bennett" className="hero-img" />

      <h1>I'm Alex Bennett, Frontend Developer</h1>
      <h2>{text}<span className="cursor">|</span></h2>

      <p>I build responsive, modern, and user-friendly web applications. Let’s create something amazing together.</p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">Connect</a>
        <a href="#portfolio" className="hero-portfolio">View Portfolio</a>
        <a href="/resume.pdf" download className="hero-resume">Hire Me</a>
      </div>

      <div className="hero-stats">
        <span>10+ Years Experience</span>
        <span>50+ Projects</span>
        <span>1000+ Github Stars</span>
      </div>

      <div className="hero-socials">
        <a href="https://github.com/alex" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/alex" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:alex@example.com"><FaEnvelope /></a>
      </div>

      <div className="scroll-down">↓ Scroll Down</div>
    </section>
  );
};

export default Hero;
