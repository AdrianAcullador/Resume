import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for section titles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section titles
    document.querySelectorAll('.section-title').forEach(title => {
      observer.observe(title);
    });

    return () => {
      document.querySelectorAll('.section-title').forEach(title => {
        observer.unobserve(title);
      });
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Modern Tech Background */}
            <div className="background-grid"></div>
            <div className="circuit-pattern"></div>
            <div className="tech-dots"></div>
            <div className="binary-rain"></div>

            {/* Floating Tech Icons */}
            <div className="tech-icons">
              <div className="tech-icon">{"<DevOps />"}</div>
              <div className="tech-icon">{"{ Cloud Computing }"}</div>
              <div className="tech-icon">{"[Security]"}</div>
              <div className="tech-icon">{"System.Architecture"}</div>
              <div className="tech-icon">{"Network.Protocol"}</div>
            </div>

            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
