import React from 'react';
import './about.css';
import img from '../assets/Nikita6.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="about-container flex flex-col items-center justify-center min-h-screen text-center lg:text-left bg-dark text-white p-6"
    >
      <div className="about-content max-w-7xl flex flex-col lg:flex-row items-center gap-13">
        <div className="about-image-container lg:w-1/3">
          <div className="about-image-wrapper relative w-80 h-80 rounded-lg overflow-hidden shadow-lg mx-auto">
            <img
              src={img}
              alt="Nikita Yadav"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="about-neon-ring absolute top-0 left-0 w-full h-full rounded-lg"></div>
          </div>
        </div>

        <div className="about-text lg:w-2/3">
          <h2 className="about-title">About Me</h2>
          
          <div className="about-intro">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi! I'm <span className="text-highlight font-semibold">Nikita Yadav</span>, a passionate MERN stack developer currently pursuing my Bachelor of Computer Applications (BCA) in 3rd year at Sant Singaji Institute of Science and Management, Sandalpur.
            </p>
          </div>

          <div className="about-skills mt-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). My expertise extends to various technologies including HTML, CSS, JavaScript, Tailwind, Bootstrap, Java, SQL, and development tools like VS Code, Git, and GitHub.
            </p>
          </div>

          <div className="about-stats flex gap-8 my-6">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm dedicated to creating exceptional user experiences and writing clean, efficient code. Always eager to learn new technologies and contribute to meaningful projects in the tech industry.
          </p>

          <a href="#contact" className="contact-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

