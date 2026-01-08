import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./Hero.css";
import profile_img from "../../assets/photoavinash.jpeg";

/* ================= ROTATING IDENTITY ================= */
const WORDS = [
  "Founder & Product Builder",
  "React JS Developer",
  "Frontend Engineer",
  "Startup Problem Solver",
  "UI/UX + Business Thinker",
];

/* ================= TYPING EFFECT ================= */
function useTyping(words) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      setText(
        deleting
          ? word.substring(0, text.length - 1)
          : word.substring(0, text.length + 1)
      );

      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 900);
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const text = useTyping(WORDS);

  /* ================= THEME ================= */
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  /* ================= PARTICLES ================= */
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: { color: "transparent" },
      fpsLimit: 50,
      particles: {
        number: { value: 50, density: { enable: true, area: 900 } },
        color: { value: ["#6366F1", "#EC4899", "#22C55E"] },
        links: { enable: true, distance: 140, opacity: 0.3 },
        move: { enable: true, speed: 0.6 },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  );

  return (
    <motion.section
      className={`hero ${theme}`}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Particles
        init={particlesInit}
        options={particleOptions}
        className="particles "
      />

      {/* Decorative blobs */}
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />

      

      <div className="hero-inner  ">
        {/* Availability */}
        <p className="availability">
          <span className="dot" /> Open for collaboration & startups
        </p>

        {/* Profile */}
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <img src={profile_img} alt="Avinash Sharma" className="hero-img" />
        </Tilt>

        {/* Headline */}
        <h1>
          I’m <span className="highlight-name">Avinash Sharma</span>
        </h1>

        <h2>
          {text}
          <span className="cursor">|</span>
        </h2>

        {/* Founder copy */}
        <p>
          I design, build and scale digital products — from idea & UX to clean,
          scalable React code. I think like a founder and execute like a
          developer.
        </p>

        {/* Skills */}
        <div className="floating-tech">
          <span className="badge">React</span>
          <span className="badge">JavaScript</span>
          <span className="badge">UI/UX</span>
          <span className="badge">Product Thinking</span>
          <span className="badge">Startup Execution</span>
        </div>

        {/* Actions */}
        <div className="hero-action">
          <a href="#contact" className="hero-connect">
            Work With Me
          </a>
          <a href="#projects" className="hero-portfolio">
            Products & Projects
          </a>
          <a href="/resume.pdf" download className="hero-resume">
            Founder 
          </a>
        </div>

        {/* Credibility */}
        <div className="hero-stats">
          <span>Founder @ Sanskaraa</span>
          <span>25+ Projects / Products</span>
          <span>2+ Years Building</span>
        </div>

        {/* Social */}
        <div className="hero-socials">
          <a href="https://github.com/Avinashkumarsharma5/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sharmaavinash5/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:bcaavinash01@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="scroll-down">↓ Scroll to see my work</div>
      </div>

      {/* WhatsApp */}
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
}
