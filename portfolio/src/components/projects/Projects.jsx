import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Sanskaraa – Puja & Event Platform",
    desc: "A culturally focused booking platform for puja, pandits, decor & catering.",
    tech: ["React", "Tailwind", "Node (in progress)"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This modern portfolio with animations, dark mode and smooth UI.",
    tech: ["React", "Framer Motion", "TSParticles"],
    link: "#",
    github: "#",
  },
  {
    title: "QuickDesk – Helpdesk System",
    desc: "Ticket management UI for end users, agents and admin dashboards.",
    tech: ["React", "Routing", "UI Design"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="section projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Some of the work I’ve done and experiments I’ve built.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
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
    </motion.div>
  );
};

export default Projects;
