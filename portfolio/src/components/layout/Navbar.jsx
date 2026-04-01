
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-glow" />

      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <FaCode />
          </div>

          <div className="logo-text">
            <span>Avinash</span>
            <span className="gradient">Sharma</span>
          </div>
        </a>

        <div className="navbar-links">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <div className="social-icons">
            <a
              href="https://github.com/Avinashkumarsharma5"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sharmaavinash5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <a href="#contact" className="contact-btn">
            Let’s Talk
          </a>

          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="mobile-socials">
              <a
                href="https://github.com/Avinashkumarsharma5"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sharmaavinash5"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
