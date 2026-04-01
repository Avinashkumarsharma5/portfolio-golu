
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";
import linkedinQR from "../../assets/linkdin qr.png";
import githubQR from "../../assets/github qr.png";
import facebookQR from "../../assets/facebook qr.png";
import instaQR from "../../assets/insta qr.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-orb orb-1" />
      <div className="contact-bg-orb orb-2" />
      <div className="contact-bg-grid" />

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="contact-tag">Let’s Build Something Great</span>

        <h2>
          Ready to turn your
          <span> idea into reality?</span>
        </h2>

        <p>
          I help founders, startups and businesses design beautiful,
          high-performing digital experiences with React, UI/UX and product
          thinking.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-card left-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="card-glow" />

          <h3>Why work with me?</h3>

          <p>
            From startup ideas like Sanskaraa to modern React interfaces, I
            build products that are visually premium and technically strong.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span>🚀</span>
              Startup & Product Collaboration
            </div>

            <div className="feature-item">
              <span>💻</span>
              React / Frontend Development
            </div>

            <div className="feature-item">
              <span>🎨</span>
              UI/UX + Premium Interfaces
            </div>

            <div className="feature-item">
              <span>🤝</span>
              Long-term Technical Partnership
            </div>
          </div>

          <div className="contact-details">
            <a href="mailto:bcaavinash01@gmail.com">
              <FaEnvelope /> bcaavinash01@gmail.com
            </a>
          </div>

          <div className="social-connect">
  <h4>Connect With Me</h4>

  <div className="social-links-grid">
    <a
      href="https://www.linkedin.com/in/sharmaavinash5"
      target="_blank"
      rel="noreferrer"
      className="social-link-card"
    >
      <div>
        <FaLinkedin /> LinkedIn
      </div>
      <img src={linkedinQR} alt="LinkedIn QR" />
    </a>

    <a
      href="https://github.com/Avinashkumarsharma5"
      target="_blank"
      rel="noreferrer"
      className="social-link-card"
    >
      <div>
        <FaGithub /> GitHub
      </div>
      <img src={githubQR} alt="GitHub QR" />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=100045210624262"
      target="_blank"
      rel="noreferrer"
      className="social-link-card"
    >
      <div>
        📘 Facebook
      </div>
      <img src={facebookQR} alt="Facebook QR" />
    </a>

    <a
      href="https://www.instagram.com/avisharma.in/"
      target="_blank"
      rel="noreferrer"
      className="social-link-card"
    >
      <div>
        📷 Instagram
      </div>
      <img src={instaQR} alt="Instagram QR" />
    </a>
  </div>
</div>
        </motion.div>

        <motion.form
          className="contact-card contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="card-glow second" />

          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project, startup or collaboration..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>

          {sent && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Your message has been sent successfully.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;