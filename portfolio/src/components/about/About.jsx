import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="section about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A brief story of who I am, what I do and what I love.
      </p>

      <div className="about-grid">
        <div>
          <h3>Who I am</h3>
          <p>
            I'm <strong>Avinash Sharma</strong>, a frontend developer focused on
            building clean, responsive and user-friendly interfaces. I enjoy
            turning complex problems into simple, beautiful and intuitive
            designs using React and modern web technologies.
          </p>
          <p>
            When I’m not coding, I explore UI/UX trends, learn new tools and
            improve my problem-solving & DSA skills.
          </p>
        </div>

        <div>
          <h3>Timeline</h3>
          <ul className="timeline">
            <li>
              <span className="timeline-dot" />
              <div>
                <h4>BCA Student</h4>
                <p>Currently pursuing BCA and improving core CS fundamentals.</p>
              </div>
            </li>
            <li>
              <span className="timeline-dot" />
              <div>
                <h4>Frontend Projects</h4>
                <p>Built multiple React based projects & UI clones.</p>
              </div>
            </li>
            <li>
              <span className="timeline-dot" />
              <div>
                <h4>Future Goals</h4>
                <p>
                  Master full-stack, crack NIMCET & work on scalable products +
                  my own startups.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
