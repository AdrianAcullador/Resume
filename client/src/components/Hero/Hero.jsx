import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1 variants={itemVariants}>
            <span className="highlight">Adrian Acullador</span>
          </motion.h1>
          <motion.h2 variants={itemVariants}>
            UI/UX Designer & Developer
          </motion.h2>
          <motion.p variants={itemVariants}>
            Pro Player
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <a href="#projects" className="btn primary">View Portfolio</a>
            <a href="#contact" className="btn secondary">Let's Talk</a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="design-elements">
            <div className="circle"></div>
            <div className="square"></div>
            <div className="dots"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
