import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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

  return (
    <section id="about" className="about full-screen">
      <div className="container">
        <div className="section-content">
          <motion.div
            className="about-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1 
              className="name-title"
              variants={itemVariants}
            >
              About Me
            </motion.h1>
          </motion.div>

          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="profile-image" variants={itemVariants}>
              <img 
                src="/images/Adrian.jpg"
              />
            </motion.div>
            
            <motion.div className="about-text" variants={itemVariants}>
              <p>
              Hi, I’m Adrian Acullador, a UI/UX designer and developer passionate about creating intuitive, user-friendly digital experiences.
              With a blend of design aesthetics and technical skills, I craft interfaces that are both visually appealing and functional.
              Passionate about creating seamless digital experiences through innovative web development.
              </p>
              <h3>Techn Stacks</h3>
              <div className="skills">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Html/CSS</span>
                <span className="skill-tag">GIT</span>
              </div>

              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://github.com/AdrianAcullador" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/andrieeyan/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100068827920223" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a href="https://www.tiktok.com/@andrieeyan" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-tiktok"></i>
                  <span>TikTok</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
