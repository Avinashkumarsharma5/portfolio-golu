// Hero.jsx - Premium 3D Split Layout Hero Component with Advanced Effects
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaFigma, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiNextdotjs } from "react-icons/si";
import "./Hero.css";

// Import your profile image (update path as needed)
import profileImg from "../../assets/photoavinash.jpeg";

// Rotating identity words for typing effect
const WORDS = [
  "Founder & Product Builder",
  "React JS Developer",
  "Frontend Engineer",
  "Startup Problem Solver",
  "UI/UX + Business Thinker",
];

// Typing Effect Hook
function useTyping(words, speed = 120, delay = 900) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const currentSpeed = deleting ? speed * 0.5 : speed;

    const timer = setTimeout(() => {
      setText(
        deleting
          ? word.substring(0, text.length - 1)
          : word.substring(0, text.length + 1)
      );

      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), delay);
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, delay]);

  return text;
}

export default function HeroPremium() {
  const typingText = useTyping(WORDS, 100, 1000);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  // Mouse move effect for image rotation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Scroll-based parallax motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityLeft = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scaleRight = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  // Theme state (dark/light)
  const [theme, setTheme] = useState(() => localStorage.getItem("premiumTheme") || "dark");

  useEffect(() => {
    localStorage.setItem("premiumTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Particles Configuration
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 70, density: { enable: true, area: 1000 } },
        color: { value: ["#6366f1", "#ec4899", "#22c55e", "#a855f7"] },
        links: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
        opacity: { value: 0.5, random: true },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        grab: {
          distance: 180,
          links: { opacity: 0.5 },
        },
      },
    }),
    []
  );

  return (
    <section ref={containerRef} className={`hero-premium ${theme}`}>
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="particles-layer"
      />

      {/* Layered Lighting Effects */}
      <div className="spotlight-bg" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />

      {/* Animated Gradient Blobs */}
      <div className="blob-glow blob-1" />
      <div className="blob-glow blob-2" />
      <div className="blob-glow blob-3" />

      {/* Main Grid Layout: 2 Columns */}
      <div className="hero-grid">
        {/* LEFT SIDE: Text, Buttons, Stats with Glass Panel */}
        <motion.div
          className="hero-left"
          style={{ y: yLeft, opacity: opacityLeft }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glass Panel Background */}
          <div className="glass-panel"></div>
          
          {/* Content */}
          <div className="hero-content-wrapper ">
            {/* Availability Badge */}
            <div className="availability-badge ">
              <span className="pulse-dot "></span>
              <span>Open for collaboration & startups</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Crafting Digital
              <br />
              <span className="gradient-text">Products, Startups & Experiences</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="hero-role">
              <span className="role-text">{typingText}</span>
              <span className="cursor-blink">|</span>
            </div>

            {/* Description */}
            <p className="hero-description">
              I design, build and scale digital products — from idea & UX to clean,
              scalable React code. I think like a founder and execute like a developer.
            </p>

            {/* Tech Badges */}
            <div className="tech-stack">
              <span className="tech-badge"><FaReact /> React</span>
              <span className="tech-badge"><SiNextdotjs /> Next.js</span>
              <span className="tech-badge"><SiFramer /> Framer Motion</span>
              <span className="tech-badge"><FaFigma /> UI/UX</span>
              <span className="tech-badge"><SiTailwindcss /> Tailwind</span>
            </div>

            {/* CTA Buttons with Glass Reflection */}
            <div className="cta-group">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaRocket /> Work With Me
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects →
              </motion.a>
            </div>

            {/* Stats Row - Card Style */}
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Building</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Avinashkumarsharma5/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sharmaavinash5/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:bcaavinash01@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: 3D Profile with Floating Cards & Mouse Move Effect */}
        <motion.div
          className="hero-right"
          style={{ y: yRight, scale: scaleRight }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="profile-3d-wrapper">
            {/* Rotating Border Glow */}
            <div className="rotating-border"></div>
            
            {/* Glass Card Background */}
            <div className="glass-card-bg"></div>

            {/* Profile Image with Tilt and Mouse Effect */}
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glareBorderRadius="30px"
              className="tilt-container"
            >
              <motion.img
                src={profileImg}
                alt="Avinash Sharma"
                className="hero-img-3d"
                style={{
                  rotateX: mousePosition.y,
                  rotateY: mousePosition.x,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </Tilt>

            {/* Clean Floating Cards */}
            <div className="floating-card card-1">
              <span className="card-icon">🚀</span>
              <span>Building Sanskaraa</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">⚡</span>
              <span>React + UI/UX</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">💼</span>
              <span>Open for Collab</span>
            </div>

            {/* Glow Ring */}
            <div className="glow-ring"></div>
          </div>

          {/* Mini floating cards */}
          <div className="floating-card-mini mini-1">
            <span>🏆 15+ Clients</span>
          </div>
          <div className="floating-card-mini mini-2">
            <span>⭐ 5.0 Rating</span>
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916201486202"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </section>
  );
}