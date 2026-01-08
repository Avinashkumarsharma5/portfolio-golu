import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  {
    name: "React & Frontend Architecture",
    level: 80,
    note: "Component design, hooks, performance & scalable UI"
  },
  {
    name: "JavaScript (ES6+)",
    level: 80,
    note: "Async logic, state handling & clean business logic"
  },
  {
    name: "HTML, CSS & Responsive UI",
    level: 90,
    note: "Pixel-perfect layouts, accessibility & animations"
  },
  {
    name: "UI/UX & Product Thinking",
    level: 75,
    note: "User flows, MVP thinking & conversion-focused design"
  },
  {
    name: "Java & OOP Concepts",
    level: 70,
    note: "OOP principles, problem-solving & backend foundation"
  },
  {
    name: "DSA & Problem Solving",
    level: 65,
    note: "Core data structures, logic building & optimization"
  }
];

const Skills = () => {
  return (
    <motion.section
      className="section skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Skills & Strengths</h2>
      <p className="section-subtitle">
        A blend of engineering skills and product mindset — focused on building
        real, scalable solutions.
      </p>

      <div className="skills-grid">
        {SKILLS.map((skill, idx) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <div>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-note">{skill.note}</span>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
