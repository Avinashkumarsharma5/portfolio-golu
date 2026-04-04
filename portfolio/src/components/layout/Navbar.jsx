
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";

const navItems = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <a href="#home" className="brand">
          <div className="brand-mark">AS</div>
          <div className="brand-text">
            <span>Avinash Sharma</span>
            <small>Frontend Developer</small>
          </div>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="desktop-socials">
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
              <FaLinkedinIn />
            </a>
          </div>

          <a href="#contact" className="cta-btn">
            Let's Talk
          </a>

          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="mobile-footer">
              <a
                href="https://github.com/Avinashkumarsharma5"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sharmaavinash5"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
