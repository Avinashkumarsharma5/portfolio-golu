import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaCode } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-logo">
          <FaCode className="nav-logo-icon" />
          <span>
            Avinash<span className="brand-dot">.</span>Sharma
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? "active" : ""}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={closeMenu}
            className={`mobile-link ${active === id ? "active" : ""}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
