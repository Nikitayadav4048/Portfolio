// import React from 'react';
// import './project.css';
// import watherapp from '../assets/weatherapp2.png' ; 
// import tasks from '../assets/tasks.png' ; 
// import cart from '../assets/cart.png' ;
// import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

// const projectsData = [
//   {
//     id: 3,
//     title: 'Weather App',
//     description: 'A weather application that provides current weather conditions and forecasts for different locations. Built using HTML, CSS, and JavaScript, and integrates with a weather API.',
//     image: watherapp, // Update with your image path
//     link: 'https://github.com/Nikitayadav4048/weather-app',
//     technologies: [
//       {  icon: <FaHtml5 /> },
//       {  icon: <FaCss3Alt /> },
//       {  icon: <FaJsSquare /> },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Add to Cart',
//     description: 'An e-commerce feature that allows users to add items to their cart. Built using HTML, CSS, and JavaScript, this project includes dynamic item addition and price calculation.',
//     image: cart , // Update with your image path
//     link: '',
//     github: 'nikita-yadav-addtocart.netlify.app' , 
//     technologies: [
//       {  icon: <FaHtml5 /> },
//       {  icon: <FaCss3Alt /> },
//       {  icon: <FaJsSquare /> },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Task Track',
//     description: 'A task tracking application that helps users manage their daily tasks. Features include task creation, editing, and completion tracking. Built with React, HTML, CSS, and JavaScript.',
//     image: tasks, // Update with your image path
//     link: 'https://github.com/Nikitayadav4048/task-track',
//     technologies: [
//       {  icon: <FaReact /> },
//       {  icon: <FaHtml5 /> },
//       {  icon: <FaCss3Alt /> },
//       {  icon: <FaJsSquare /> },
//     ],
//   },
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="projects-container bg-dark text-white py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project) => (
//             <div key={project.id} className="project-card bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-400 mb-4">{project.description}</p>
//               <div className="technologies text-gray-400 mb-4 flex flex-wrap justify-center">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="bg-gray-700 text-white py-1 px-1 rounded-full text-sm mr-1 flex items-center">
//                     {tech.icon}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from 'react';
// import './project.css';
// import watherapp from '../assets/weatherapp2.png';
// import tasks from '../assets/tasks.png';
// import cart from '../assets/cart.png';
// import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

// const projectsData = [
//   {
//     id: 3,
//     title: 'Weather App',
//     description: 'A weather application that provides current weather conditions and forecasts for different locations. Built using HTML, CSS, and JavaScript, and integrates with a weather API.',
//     image: watherapp, // Update with your image path
//     link: 'https://nikita-yadav-weatherapp.netlify.app',
//     repo: 'https://github.com/Nikitayadav4048/weather-app',
//     technologies: [
//       { icon: <FaHtml5 /> },
//       { icon: <FaCss3Alt /> },
//       { icon: <FaJsSquare /> },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Add to Cart',
//     description: 'An e-commerce feature that allows users to add items to their cart. Built using HTML, CSS, and JavaScript, this project includes dynamic item addition and price calculation.',
//     image: cart, // Update with your image path
//     link: 'https://nikita-yadav-addtocart.netlify.app', // Updated with your Netlify link
//     repo: 'https://github.com/Nikitayadav4048/add-to-cart', // GitHub link
//     technologies: [
//       { icon: <FaHtml5 /> },
//       { icon: <FaCss3Alt /> },
//       { icon: <FaJsSquare /> },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Task Track',
//     description: 'A task tracking application that helps users manage their daily tasks. Features include task creation, editing, and completion tracking. Built with React, HTML, CSS, and JavaScript.',
//     image: tasks, // Update with your image path
//     link: 'https://yadavnikita-tasktrack.netlify.app/',
//     repo: 'https://github.com/Nikitayadav4048/TaskTrack', // GitHub link
//     technologies: [
//       { icon: <FaReact /> },
//       { icon: <FaHtml5 /> },
//       { icon: <FaCss3Alt /> },
//       { icon: <FaJsSquare /> },
//     ],
//   },
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="projects-container bg-dark text-white py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10 text-gradient">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project) => (
//             <div key={project.id} className="project-card bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-400 mb-4">{project.description}</p>
//               <div className="technologies text-gray-400 mb-4 flex flex-wrap justify-center">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="bg-gray-700 text-white py-1 px-1 rounded-full text-sm mr-1 flex items-center">
//                     {tech.icon}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href={project.repo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React from 'react';
// import './project.css';
// import data from '../../src/data/projectsData.json';
// import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
// import weatherapp from '../assets/weatherapp2.png';
// import cart from '../assets/cart.png';
// import tasks from '../assets/tasks.png';
// import portfolio from '../assets/portfolio.png'

// const techIcons = {
//   html: <FaHtml5 />,
//   css: <FaCss3Alt />,
//   js: <FaJsSquare />,
//   react: <FaReact />,
// };

// const images = {
//   'weatherapp2.png': weatherapp,
//   'cart.png': cart,
//   'tasks.png': tasks,
//   'portfolio.png': portfolio
// };

// const Projects = () => {
//   return (
//     <div id="projects" className="projects-container bg-dark text-white py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10 text-gradient">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.map((project) => (
//             <div key={project.id} className="project-card bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
//               <img
//                 src={images[project.image]}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-400 mb-4">{project.description}</p>
//               <div className="technologies text-gray-400 mb-4 flex flex-wrap justify-center">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="bg-gray-700 text-white py-1 px-1 rounded-full text-sm mr-1 flex items-center">
//                     {techIcons[tech]}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href={project.repo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


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