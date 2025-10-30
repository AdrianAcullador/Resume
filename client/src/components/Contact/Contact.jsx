import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    // Create section binary effect
    const createSectionBinary = () => {
      const binary = document.querySelector('#contact .section-binary');
      if (!binary) return;
      
      for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.className = 'section-binary-column';
        column.style.left = `${Math.random() * 100}%`;
        column.style.animationDelay = `${Math.random() * 15}s`;
        column.textContent = Array(20).fill(0).map(() => 
          Math.random() > 0.5 ? '1' : '0'
        ).join('');
        binary.appendChild(column);
      }
    };

    // Create section dots
    const createSectionDots = () => {
      const dots = document.querySelector('#contact .section-dots');
      if (!dots) return;
      
      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.className = 'section-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 3}s`;
        dots.appendChild(dot);
      }
    };

    createSectionBinary();
    createSectionDots();
  }, []);

  return (
    <section id="contact" className="contact section-wrapper">
      {/* Section Background Effects */}
      <div className="section-binary"></div>
      <div className="section-dots"></div>
      <div className="section-tech-icons">
        <div className="section-tech-icon">{"<Contact />"}</div>
        <div className="section-tech-icon">{"connect()"}</div>
      </div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          Contacts
        </motion.h2>
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>adrianacullador@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>San Juan Molo Iloilo City</p>
            </div>
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/AdrianAcullador" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                  <i className="fab fa-github"></i>
                  <span className="social-label">GitHub</span>
                </a>
                <a href="https://www.instagram.com/andrieeyan/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                  <i className="fab fa-instagram"></i>
                  <span className="social-label">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100068827920223" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                  <i className="fab fa-facebook"></i>
                  <span className="social-label">Facebook</span>
                </a>
                <a href="https://www.tiktok.com/@andrieeyan" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                  <i className="fab fa-tiktok"></i>
                  <span className="social-label">TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
