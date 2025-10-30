import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
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
      const binary = document.querySelector('#projects .section-binary');
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
      const dots = document.querySelector('#projects .section-dots');
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

  const projects = [
    {
      title: 'Uptalk',
      description: 'A communication tool created to enable couples to communicate openly and efficiently, promoting enhanced understanding and deeper connection.',
      image: '/images/Uptalk.jpg',
      tags: ['MongDB','Express.js', 'React', 'Node.js', 'Tailweind CSS'],
      link: '#'
    },
    {
      title: 'AwesomeToDos',
      description: 'A Website that you can add and delete',
      image: '/images/AwesomeTodo.jpg',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: '#'
    },
    {
      title: 'mapaWIT',
      description: 'A web application designed mostly for freshmen that gives them directions and helps them find the buildings and rooms on campus.',
      image: '/images/mapaWIT.jpg',
      tags: ['MappedIN', 'Three.js', 'React.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects section-wrapper">
      {/* Section Background Effects */}
      <div className="section-binary"></div>
      <div className="section-dots"></div>
      <div className="section-tech-icons">
        <div className="section-tech-icon">{"<Projects />"}</div>
        <div className="section-tech-icon">{"function deploy() {"}</div>
        <div className="section-tech-icon">{"git push origin main"}</div>
      </div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="view-project">
                    View Project <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
