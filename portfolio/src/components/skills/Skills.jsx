
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPalette,
  FaJava,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import "./Skills.css";

const SKILLS = [
  {
    icon: <FaReact />,
    title: "React & Frontend Architecture",
    level: 80,
    desc: "Component design, reusable architecture, hooks and scalable UI systems.",
    color: "purple",
  },
  {
    icon: <FaJs />,
    title: "JavaScript (ES6+)",
    level: 80,
    desc: "Async handling, business logic, API integration and modern syntax.",
    color: "yellow",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX & Responsive Design",
    level: 90,
    desc: "Premium interfaces, responsive layouts, accessibility and motion.",
    color: "pink",
  },
  {
    icon: <FaJava />,
    title: "Java & OOP",
    level: 70,
    desc: "Strong OOP concepts, logic building and backend fundamentals.",
    color: "blue",
  },
  {
    icon: <FaBrain />,
    title: "Product Thinking",
    level: 75,
    desc: "MVP planning, founder mindset, user flow and startup problem solving.",
    color: "green",
  },
  {
    icon: <FaCode />,
    title: "DSA & Problem Solving",
    level: 65,
    desc: "Core data structures, algorithms and analytical thinking.",
    color: "orange",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-orb orb-left" />
      <div className="skills-orb orb-right" />

      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="skills-tag">Skills & Strengths</span>

        <h2>
          A blend of engineering
          <span> and product mindset</span>
        </h2>

        <p>
          I combine technical skills with founder thinking to build products
          that are not only functional, but meaningful and scalable.
        </p>
      </motion.div>

      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            className={`skill-card ${skill.color}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -10 }}
          >
            <div className="skill-glow" />

            <div className="skill-top">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-percent">{skill.level}%</span>
            </div>

            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>

            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.12 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
