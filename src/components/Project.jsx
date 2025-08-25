import React from 'react';
import './project.css';
import data from '../../src/data/projectsData.json';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import weatherapp from '../assets/weatherapp2.png';
import cart from '../assets/cart.png';
import tasks from '../assets/tasks.png';
import portfolio from '../assets/portfolio.png';

const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJsSquare />,
  react: <FaReact />,
};

const images = {
  'weatherapp2.png': weatherapp,
  'cart.png': cart,
  'tasks.png': tasks,
  'portfolio.png': portfolio,
};

const Projects = () => {
  return (
    <div id="projects" className="projects-container bg-dark text-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gradient">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <img
                  src={images[project.image]}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="technologies text-gray-400 mb-4 flex flex-wrap justify-center">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-pill">
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="button-row">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view">
                  View Project
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-repo">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;