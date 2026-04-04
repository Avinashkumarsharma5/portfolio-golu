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
    number: "",
    email: "",
    education: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.number ||
      !form.email ||
      !form.education ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage = `Hello Avinash,%0A%0AName: ${form.name}%0APhone: ${form.number}%0AEmail: ${form.email}%0AEducation: ${form.education}%0A%0AMessage:%0A${form.message}`;

    window.open(
      `https://wa.me/916201486202?text=${whatsappMessage}`,
      "_blank"
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

    setForm({
      name: "",
      number: "",
      email: "",
      education: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-orb orb-1" />
      <div className="contact-bg-orb orb-2" />

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="contact-tag">Let's Work Together</span>

        <h2>
          Have an idea?
          <span> Let's build it together.</span>
        </h2>

        <p>
          Open for startups, freelance projects, internships and long-term
          collaborations.
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

          <h3>Connect With Me</h3>

          <p>
            Whether you want to discuss a startup, a React project or a new
            opportunity — feel free to reach out.
          </p>

          <div className="contact-details">
            <a href="mailto:bcaavinash01@gmail.com">
              <FaEnvelope /> bcaavinash01@gmail.com
            </a>

            <a
              href="https://wa.me/916201486202"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> +91 6201486202
            </a>
          </div>

          <div className="social-connect">
            <h4>Social Profiles</h4>

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
                <div>📘 Facebook</div>
                <img src={facebookQR} alt="Facebook QR" />
              </a>

              <a
                href="https://www.instagram.com/avisharma.in/"
                target="_blank"
                rel="noreferrer"
                className="social-link-card"
              >
                <div>📷 Instagram</div>
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

          <div className="form-top">
            <h3>Start a Conversation</h3>
            <p>Fill the form and the details will open directly in WhatsApp.</p>
          </div>

          <div className="double-inputs">
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="number"
                placeholder="Enter your number"
                value={form.number}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="double-inputs">
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
              <label>Education</label>
              <input
                type="text"
                name="education"
                placeholder="BCA / B.Tech / MBA"
                value={form.education}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project, startup or opportunity..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="send-btn">
            Send on WhatsApp
          </button>

          {sent && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Redirecting to WhatsApp...
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
