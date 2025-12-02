import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const words = [
  "React JS Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState("dark");

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.setAttribute("data-theme", next);
  };

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 900);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, isDeleting ? 60 : 130);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <motion.section
      className={`hero ${theme}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: ["#6366F1", "#EC4899", "#22C55E"] },
            links: {
              enable: true,
              distance: 130,
              color: "#6366F1",
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: "bounce" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Floating Blobs */}
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <div className="hero-inner ">
        <p className="availability">
          <span className="dot" /> Available for Freelance
        </p>

        {/* 3D Profile Image */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="tilt-wrapper">
          <motion.img src={profile_img} alt="Profile" className="hero-img" />
        </Tilt>

        <h1>
          Hello, I'm <span className="highlight-name">Avinash Sharma</span>
        </h1>

        <h2>
          {text}
          <span className="cursor">|</span>
        </h2>

        <p>I build fast, responsive & visually clean UI powered by ReactJS.</p>

        <div className="floating-tech">
          <span className="badge">React</span>
          <span className="badge">JavaScript</span>
          <span className="badge">TailwindCSS</span>
          <span className="badge">UI/UX</span>
        </div>

        <div className="hero-action">
          <a href="#contact" className="hero-connect">
            Contact
          </a>
          <a href="#projects" className="hero-portfolio">
            Portfolio
          </a>
          <a href="/resume.pdf" download className="hero-resume">
            Resume
          </a>
        </div>

        <div className="hero-stats">
          <span>2+ Years Experience</span>
          <span>25+ Projects</span>
          <span>300+ Github Stars</span>
        </div>

        <div className="hero-socials">
          <a
            title="GitHub"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            title="LinkedIn"
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a title="Email Me" href="mailto:avinash@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="scroll-down">↓ Scroll Down</div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916201486202"
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </motion.section>
  );
};

export default Hero;
