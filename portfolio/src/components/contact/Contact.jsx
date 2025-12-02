import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // yaha baad me EmailJS ya backend add kar sakte ho
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="section contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Want to collaborate or hire me? Drop a message.
      </p>

      <div className="contact-grid">
        <div>
          <h3>Let’s talk</h3>
          <p>
            I am open to internships, freelance projects, collaborations and
            interesting frontend opportunities.
          </p>
          <p className="contact-highlight">
            Email: <a href="mailto:avinash@gmail.com">avinash@gmail.com</a>
          </p>
          <p className="contact-highlight">
            LinkedIn: <a href="https://linkedin.com" target="_blank">View Profile</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
          {sent && <p className="contact-success">Message sent! ✅</p>}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
