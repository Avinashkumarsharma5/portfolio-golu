import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Sanskaraa – Puja & Event Platform",
    role: "Founder & Frontend Developer",
    desc: "An end-to-end cultural services platform simplifying puja, pandit booking, decor and event management for Indian households.",
    highlights: [
      "Product ideation & UX design",
      "Complete frontend architecture",
      "Multi-service booking flows",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Node (WIP)"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "QuickDesk – Helpdesk System",
    role: "Frontend Engineer",
    desc: "A role-based helpdesk system with ticket creation, status tracking and admin dashboards for real-world support workflows.",
    highlights: [
      "Role-based UI (User, Agent, Admin)",
      "Reusable components",
      "Clean dashboard layouts",
    ],
    tech: ["React", "Routing", "State Management"],
    link: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    role: "Designer & Developer",
    desc: "A modern animated portfolio showcasing my work, skills and founder mindset with smooth UX and dark mode.",
    highlights: [
      "Motion-based UI",
      "Responsive & accessible",
      "Founder-focused storytelling",
    ],
    tech: ["React", "Framer Motion", "TSParticles"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="section projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Projects & Products</h2>
      <p className="section-subtitle">
        Real products, real problems — built with ownership, not just code.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            className={`project-card ${
              project.featured ? "featured" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
          >
            {project.featured && (
              <span className="project-badge">Flagship Product</span>
            )}

            <h3>{project.title}</h3>
            <span className="project-role">{project.role}</span>

            <p className="project-desc">{project.desc}</p>

            <ul className="project-highlights">
              {project.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.link} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
