import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "React", level: 80 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Tailwind / UI Libraries", level: 75 },
  { name: "Java / OOPs", level: 70 },
  { name: "DSA Basics", level: 65 },
];

const Skills = () => {
  return (
    <motion.div
      className="section skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies I’m comfortable with and love working on.
      </p>

      <div className="skills-grid">
        {SKILLS.map((skill, idx) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
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
    </motion.div>
  );
};

export default Skills;
