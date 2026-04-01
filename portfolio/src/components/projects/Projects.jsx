
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Sanskaraa",
    subtitle: "Puja & Event Services Platform",
    role: "Founder & Frontend Developer",
    desc: "A modern startup platform for puja booking, pandit services, decoration, catering and event management.",
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
    highlights: [
      "Built complete founder-led product vision",
      "Designed premium UI/UX and booking flow",
      "Created scalable multi-service architecture",
    ],
    live: "https://www.sanskaraa.co.in",
    github: "https://github.com/Avinashkumarsharma5",
    featured: true,
    glow: "purple",
  },
  {
    title: "QuickDesk",
    subtitle: "Role-Based Helpdesk System",
    role: "Frontend Engineer",
    desc: "A complete helpdesk and ticket management platform with user, agent and admin dashboards.",
    tech: ["React", "Context API", "Routing", "CSS"],
    highlights: [
      "Role-based dashboards",
      "Reusable component structure",
      "Modern UI for support workflows",
    ],
    live: "https://avinashkumarsharma5.github.io/web-school/",
    github: "https://github.com/Avinashkumarsharma5",
    glow: "blue",
  },
  {
    title: "Portfolio",
    subtitle: "Animated Founder Portfolio",
    role: "Designer & Developer",
    desc: "A premium animated personal portfolio with futuristic UI, motion and storytelling.",
    tech: ["React", "Framer Motion", "TSParticles"],
    highlights: [
      "Smooth motion-based design",
      "Responsive premium UI",
      "Strong founder and startup storytelling",
    ],
    live: "https://avinashkumarsharma5.github.io/portfolio-golu/",
    github: "https://github.com/Avinashkumarsharma5",
    glow: "pink",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-orb orb-left" />
      <div className="projects-orb orb-right" />

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="projects-tag">Projects & Products</span>

        <h2>
          Products built with
          <span> ownership & vision</span>
        </h2>

        <p>
          From startup ideas like Sanskaraa to modern web applications, these
          are products I’ve designed, developed and improved with a founder’s mindset.
        </p>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${project.featured ? "featured" : ""} ${project.glow}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-glow" />

            {project.featured && (
              <span className="featured-badge">Flagship Product</span>
            )}

            <div className="project-top">
              <div>
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>

              <span className="project-role">{project.role}</span>
            </div>

            <p className="project-desc">{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-highlights">
              {project.highlights.map((point) => (
                <div key={point} className="highlight-item">
                  <span>•</span>
                  {point}
                </div>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaGlobe /> Live Demo
              </a>

              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>

            <button className="project-btn">
              Explore Project <FaArrowRight />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
