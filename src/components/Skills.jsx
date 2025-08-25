import React from 'react';
import './skills.css';
import skillsData from '../../src/data/skillsData.json'; 

const Skills = () => {
  return (
    <div id="skills" className="skills-container bg-dark text-white p-6">
      <div className="skills-content max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">My Skills</h2>
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300"
            >
              <div className="icon-container text-4xl mb-4 text-gradient">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

