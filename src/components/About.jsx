// import React from 'react';
// import './about.css';
// import img from './Nikita2.jpeg'; // Update the path to your image

// const About = () => {
//   return (
//     <div id="about" className="about-container flex flex-col items-center justify-center min-h-screen text-center lg:text-left bg-dark text-white p-6">
//       <div className="about-content max-w-4xl flex flex-col lg:flex-row items-center gap-12">
//         <div className="about-image-container lg:w-1/3">
//           <div className="about-image-wrapper relative w-80 h-80 rounded-lg overflow-hidden shadow-lg mx-auto">
//             <img
//               src={img}
//               alt="Nikita Yadav"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="about-neon-ring absolute top-0 left-0 w-full h-full rounded-lg"></div>
//           </div>
//         </div>
//         <div className="about-text lg:w-2/3">
//           <h2 className="text-5xl font-bold mb-4">About Me</h2>
//           <p className="text-gray-400 text-lg">
//             My name is <span className="text-highlight">Nikita Yadav</span> and I am currently pursuing my Bachelor of Computer Applications (BCA), 3nd year, at Sant Singaji Institute of Science and Management, Sandalpur. 
//           </p>
//           <p className="text-gray-400 text-lg mt-4">
//             I am passionate about web development and have been learning various technologies including HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Java, SQL, VS code , Git , Git-Hub and DBMS. My goal is to leverage these skills to create seamless and interactive web experiences.
//           </p>
//           <p className="text-gray-400 text-lg mt-4">
//             As I continue my journey, I look forward to acquiring more knowledge and honing my abilities to make meaningful contributions to the tech industry.
//           </p>
//           <button className="contact-button mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:bg-gradient-to-l transition-all" >
//             <a href="#contact">Contact</a> 
//              </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import './about.css';
// import img from './Nikita2.jpeg'; // Make sure the path is correct
import img from '../assets/Nikita3.jpg' 

const About = () => {
  return (
    <div
      id="about"
      className="about-container flex flex-col items-center justify-center min-h-screen text-center lg:text-left bg-dark text-white p-6"
    >
      <div className="about-content max-w-4xl flex flex-col lg:flex-row items-center gap-12">
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
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">
            My name is <span className="text-highlight">Nikita Yadav</span> and I am currently pursuing my Bachelor of Computer Applications (BCA), 3rd year, at Sant Singaji Institute of Science and Management, Sandalpur.
          </p>
          <p className="text-gray-400 text-lg mt-4">
            I am passionate about web development and have been learning various technologies including HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Java, SQL, VS Code, Git, GitHub, and DBMS. My goal is to leverage these skills to create seamless and interactive web experiences.
          </p>
          <p className="text-gray-400 text-lg mt-4">
            As I continue my journey, I look forward to acquiring more knowledge and honing my abilities to make meaningful contributions to the tech industry.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:bg-gradient-to-l transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

