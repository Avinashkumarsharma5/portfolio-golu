import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Future: EmailJS / Backend API
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="section contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Let’s Work Together</h2>
      <p className="section-subtitle">
        Open to collaborations, startups, freelance work and meaningful product
        building conversations.
      </p>

      <div className="contact-grid">
        {/* LEFT */}
        <div className="contact-info">
          <h3>Why reach out?</h3>
          <p>
            Whether you’re looking for a frontend developer, a product-focused
            engineer or a startup collaborator — I’d love to talk.
          </p>

          <ul className="contact-points">
            <li>🚀 Product & Startup Collaboration</li>
            <li>💻 Frontend / React Development</li>
            <li>🎨 UI/UX & Product Design</li>
            <li>🤝 Long-term Tech Partnerships</li>
          </ul>

          <p className="contact-highlight">
            📧 Email:{" "}
            <a href="bcaavinash01@gmail.com">bcaavinash01@gmail.com</a>
          </p>

          <p className="contact-highlight">
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sharmaavinash5"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </p>
        </div>

        {/* RIGHT */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your idea, project or opportunity..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Send Message</button>

          {sent && (
            <motion.p
              className="contact-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully ✅
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
