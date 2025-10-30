import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  useEffect(() => {
    // Create binary rain effect
    const createBinaryRain = () => {
      const binaryContainer = document.querySelector('.loading-binary');
      if (!binaryContainer) return;
      
      // Clear existing content
      binaryContainer.innerHTML = '';

      for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${(i / 20) * 100}%`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        for (let j = 0; j < 20; j++) {
          const span = document.createElement('span');
          span.textContent = Math.random() > 0.5 ? '1' : '0';
          span.style.animationDelay = `${Math.random() * 2}s`;
          column.appendChild(span);
        }
        
        binaryContainer.appendChild(column);
      }
    };

    createBinaryRain();
  }, []);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className="loading-content">
        <div className="loading-text">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            to my
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Portfolio
          </motion.span>
        </div>
        <motion.div 
          className="loading-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <div className="loading-binary"></div>
      </div>
    </motion.div>
  );
};

export default Loading;
