import React from 'react';
import './project.css';
import data from '../../src/data/projectsData.json';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaExternalLinkAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import weatherapp from '../assets/weatherapp2.png';
import cart from '../assets/cart.png';
import tasks from '../assets/tasks.png';
import portfolio from '../assets/portfolio.png';
import companyWebsite from '../assets/Company_Website.png';
import ngoWebsite from '../assets/NGO-Website.png';
import dynamicBoard from '../assets/Dynamic_Board.png';

const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJsSquare />,
  react: <FaReact />,
  nodeJS: <FaNodeJs />,
  ExpressJS: <SiExpress />,
  MongoDB: <SiMongodb />,
};

const images = {
  'weatherapp2.png': weatherapp,
  'cart.png': cart,
  'tasks.png': tasks,
  'portfolio.png': portfolio,
  'Company_Website.png': companyWebsite,
  'NGO-Website.png': ngoWebsite,
  'Dynamic_Board.png': dynamicBoard,
};

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Here are some of my recent projects that showcase my skills and creativity</p>
        
        <div className="projects-grid">
          {data.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={images[project.image]}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;