import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Logo */}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Menu icon (mobile) */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <a href="mailto:alex@example.com" className="nav-connect">
        Connect with me
      </a>
    </nav>
  );
};

export default Navbar;
