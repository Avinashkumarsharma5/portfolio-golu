import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Builder by mindset, developer by skill — driven by products, not just code.
      </p>

      <div className="about-grid">
        {/* LEFT */}
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I’m <strong>Avinash Sharma</strong>, a <strong>Founder & Frontend Developer</strong>
            who loves building real-world products from scratch. I don’t just focus
            on UI — I think about users, scalability and long-term product vision.
          </p>

          <p>
            As the founder of <strong>Sanskaraa</strong>, I’ve experienced the full
            journey of product building — identifying problems, designing solutions,
            shipping MVPs and continuously improving based on feedback.
          </p>

          <p>
            Alongside startups, I sharpen my technical foundation through React,
            JavaScript, UI/UX design and computer science fundamentals.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-timeline">
          <h3>My Journey</h3>
          <ul className="timeline">
            <li>
              <span className="timeline-dot" />
              <div>
                <h4>BCA Student</h4>
                <p>
                  Pursuing BCA while strengthening core CS concepts, DSA and
                  problem-solving skills.
                </p>
              </div>
            </li>

            <li>
              <span className="timeline-dot" />
              <div>
                <h4>Frontend Developer</h4>
                <p>
                  Built multiple React-based applications, focusing on clean UI,
                  performance and reusable components.
                </p>
              </div>
            </li>

            <li>
              <span className="timeline-dot" />
              <div>
                <h4>Founder @ Sanskaraa</h4>
                <p>
                  Building a full-fledged event & puja services platform —
                  handling product, design and frontend execution.
                </p>
              </div>
            </li>

            <li>
              <span className="timeline-dot" />
              <div>
                <h4>Future Vision</h4>
                <p>
                  Become a strong full-stack engineer, crack NIMCET and scale
                  impactful tech products & startups.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
