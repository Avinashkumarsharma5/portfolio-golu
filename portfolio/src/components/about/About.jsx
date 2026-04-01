
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRocket,
  FaGraduationCap,
  FaBullseye,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "BCA Student",
      text: "Pursuing BCA while improving DSA, Java and core computer science concepts.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Developer",
      text: "Building premium React applications with clean UI, motion and modern UX.",
    },
    {
      icon: <FaRocket />,
      title: "Founder @ Sanskaraa",
      text: "Creating a startup focused on puja, events and cultural services with modern technology.",
    },
    {
      icon: <FaBullseye />,
      title: "Future Vision",
      text: "Crack NIMCET, become a full-stack engineer and build impactful startups.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-orb orb-left" />
      <div className="about-orb orb-right" />

      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="about-tag">Who I Am</span>

        <h2>
          Turning ideas into
          <span> real digital products</span>
        </h2>

        <p>
          I’m Avinash Sharma — a founder, frontend developer and product thinker
          who enjoys building startups, premium interfaces and meaningful user
          experiences.
        </p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-story glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="card-glow" />

          <h3>My Story</h3>

          <p>
            I started with curiosity for coding, but soon I became passionate
            about building complete products — not just writing code.
          </p>

          <p>
            Today, I work with React, JavaScript and UI/UX to build premium,
            modern and scalable experiences.
          </p>

          <p>
            As the founder of Sanskaraa, I’ve learned how to think like a
            startup founder — solving problems, validating ideas and building
            products people actually need.
          </p>

          <div className="about-stats">
            <div>
              <h4>25+</h4>
              <span>Projects</span>
            </div>

            <div>
              <h4>2+</h4>
              <span>Years Learning</span>
            </div>

            <div>
              <h4>1</h4>
              <span>Startup Vision</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="journey-grid"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {cards.map((item, index) => (
            <motion.div
              className="journey-card glass-card"
              key={index}
              whileHover={{ y: -10 }}
            >
              <div className="journey-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
