// import React, { useState } from 'react';
// import img from './Nikita2.jpeg';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Navbar Section */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md ">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'} ` }>
//           <li className="hover:text-white transition">
//             <a href="#home">Home</a>
//           </li>
//           <li className="hover:text-white transition">
//             <a href="#about">About</a>
//           </li>
//           <li className="hover:text-white transition">
//             <a href="#skills">Skills</a>
//           </li>
//           <li className="hover:text-white transition">
//             <a href="#projects">Projects</a>
//           </li>
//           <li className="hover:text-white transition">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//         {/* Mobile Menu Button */}
//         <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         id="home"
//         className="home-container flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left bg-dark text-white gap-12 p-6"
//       >
//         {/* Left Section */}
//         <div className="lg:w-1/2 pl-10">
//           <h1 className="text-4xl lg:text-5xl font-bold animate-fadeIn">
//             Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//           </h1>
//           <h2 className="text-2xl lg:text-3xl font-semibold mt-4 animate-slideIn">
//             And I'm a <span className="text-highlight">Front-End Developer</span>
//           </h2>
//           <p className="text-gray-400 mt-6 text-lg animate-fadeInUp">
//             Hi! I'm Nikita Yadav, a passionate front-end developer specializing
//             in transforming designs into seamless and interactive web
//             experiences using HTML, CSS, JavaScript, React, and Tailwind.
//           </p>
//           <div className="flex gap-4 mt-6 justify-center lg:justify-start">
//             {/* Social Icons */}
//             <a
//               href="https://github.com/Nikitayadav4048"
//               target="_blank"
//               className="text-gray-400  text-2xl transition animate-bounce"
//             >
//               <i className="fab fa-github"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/nikitayadav4"
//               target="_blank"
//               className="text-gray-400  text-2xl transition animate-bounce"
//             >
//               <i className="fab fa-linkedin"></i>
//             </a>
//             {/* <a
//               href="#"
//               className="text-gray-400 hover:text-purple-500 text-2xl transition animate-bounce"
//             >
//               <i className="fab fa-twitter"></i>
//             </a> */}
//           </div>
//           {/* <button className="mt-8 px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all animate-pulse">
//           <a href="/Nikita-Resume.png"  
//            download className="mt-8 px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all animate-pulse" > 
//            Download CV
//             </a>
//           </button> */}
//           <button className="mt-8 px-4 py-3 bg-purple-600 text-white font-bold rounded-lg  transition-all animate-pulse"> <a href="/Nikita-Resume.png" download className="text-white" > Download CV </a> </button>
//         </div>

//         {/* Right Section */}
//         <div className="relative lg:w-1/2 pt-8">
//           <div className="profile-container mx-auto relative w-96 h-96 rounded-full overflow-hidden shadow-lg animate-spinSlow">
//             <img
//               src={img}
//               alt="Nikita Yadav"
//               className="w-full h-full object-cover"
//             />
//             <div className="neon-ring absolute top-0 left-0 w-full h-full rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Navbar Section */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
//           <li className="hover:text-white transition"><a href="#home">Home</a></li>
//           <li className="hover:text-white transition"><a href="#about">About</a></li>
//           <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
//           <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
//           <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center bg-dark text-white gap-6 p-6"
//       >
//         <h1 className="text-4xl lg:text-5xl font-bold animate-fadeIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-2xl lg:text-3xl font-semibold animate-slideIn">
//           A Front-End Developer
//         </h2>

//         {/* Social Icons */}
//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition animate-bounce"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition animate-bounce"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikita@example.com"
//             className="text-gray-400 text-2xl transition animate-bounce"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
//           <li className="hover:text-white transition"><a href="#home">Home</a></li>
//           <li className="hover:text-white transition"><a href="#about">About</a></li>
//           <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
//           <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
//           <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center bg-dark text-white gap-6 p-6 animate-fadeIn"
//       >
//         <h1 className="text-4xl lg:text-5xl font-bold text-gradient animate-slideIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-2xl lg:text-3xl font-semibold animate-pulse">
//           A Front-End Developer
//         </h2>

//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikita@example.com"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md animate-slideIn">

//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
//           <li className="hover:text-white transition"><a href="#home">Home</a></li>
//           <li className="hover:text-white transition"><a href="#about">About</a></li>
//           <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
//           <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
//           <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center bg-dark text-white gap-6 p-6 animate-fadeIn"
//       >
//         <h1 className="text-4xl lg:text-5xl font-bold text-gradient animate-slideIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-2xl lg:text-3xl font-semibold animate-pulse">
//           A Front-End Developer
//         </h2>

//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikita@example.com"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md animate-slideIn">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
//           <li className="hover:text-white transition"><a href="#home">Home</a></li>
//           <li className="hover:text-white transition"><a href="#about">About</a></li>
//           <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
//           <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
//           <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center bg-dark text-white gap-6 p-6 animate-fadeIn"
//       >
//         <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-slideIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-3xl lg:text-3xl font-semibold animate-pulse">
//           A Front-End Developer
//         </h2>

//         <p className="max-w-xl text-lg text-gray-300 leading-relaxed animate-fadeIn delay-300">
//           I'm a passionate web developer who enjoys creating clean and responsive user interfaces using modern technologies like React, Tailwind, and JavaScript.
//         </p>

//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikitayadav4048@gmail.com"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md animate-slideIn">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-8 text-gray-300 text-lg">
//           <li className="hover:text-white transition"><a href="#home">Home</a></li>
//           <li className="hover:text-white transition"><a href="#about">About</a></li>
//           <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
//           <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
//           <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
//         </ul>

//         {/* Mobile Toggle Icon */}
//         <div className="lg:hidden text-white text-2xl cursor-pointer z-50" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-black px-6 py-4 text-lg text-gray-300 flex flex-col gap-4 z-40 relative">
//           <a href="#home" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Home</a>
//           <a href="#about" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>About</a>
//           <a href="#skills" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Skills</a>
//           <a href="#projects" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Projects</a>
//           <a href="#contact" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Contact</a>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center bg-dark text-white gap-6 p-6 animate-fadeIn"
//       >
//         <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-slideIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-3xl font-semibold animate-pulse">A Front-End Developer</h2>
//         <p className="max-w-xl text-lg text-gray-300 leading-relaxed animate-fadeIn delay-300">
//           I'm a passionate web developer who enjoys creating clean and responsive user interfaces
//           using modern technologies like React, Tailwind, and JavaScript.
//         </p>
//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikitayadav4048@gmail.com"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import './home.css';

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(prev => !prev);
//   };

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 shadow-md animate-slideIn relative z-50">
//         <div className="text-gradient text-3xl font-bold pl-10">Nikita Yadav</div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-8 text-lg text-white pr-10">
//           <li><a href="#home" className="hover:text-highlight transition">Home</a></li>
//           <li><a href="#about" className="hover:text-highlight transition">About</a></li>
//           <li><a href="#skills" className="hover:text-highlight transition">Skills</a></li>
//           <li><a href="#projects" className="hover:text-highlight transition">Projects</a></li>
//           <li><a href="#contact" className="hover:text-highlight transition">Contact</a></li>
//         </ul>

//         <div className="lg:hidden text-white text-2xl cursor-pointer pr-4" onClick={handleMenuToggle}>
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {/* {menuOpen && (
//         <ul className="lg:hidden bg-black px-8 py-6 text-lg text-white flex flex-col gap-2 shadow-md border-t border-gray-700 z-40 relative text-left">
//           <li><a href="#home" onClick={closeMenu} className="hover:text-highlight transition m-7">Home</a></li>
//           <li><a href="#about" onClick={closeMenu} className="hover:text-highlight transition m-7">About</a></li>
//           <li><a href="#skills" onClick={closeMenu} className="hover:text-highlight transition m-7">Skills</a></li>
//           <li><a href="#projects" onClick={closeMenu} className="hover:text-highlight transition m-7">Projects</a></li>
//           <li><a href="#contact" onClick={closeMenu} className="hover:text-highlight transition m-7">Contact</a></li>
//         </ul>
//       )} */}

//       {menuOpen && (
//   <ul className="lg:hidden bg-neutral-900 px-8 py-6 text-lg text-white flex flex-col gap-3 shadow-xl border-t border-fuchsia-700 z-40 relative text-left animate-slideInCustom">
//     {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
//       <li key={label} className="border-b border-gray-800 last:border-none pb-2">
//         <a
//           href={`#${label.toLowerCase()}`}
//           onClick={closeMenu}
//           className="hover:text-highlight transition duration-300 ease-in-out hover:pl-2 block"
//         >
//           <i className="fas fa-angle-right pr-2 text-highlight" /> {label}
//         </a>
//       </li>
//     ))}
//   </ul>
// )}

//       {/* Hero Section */}
//       <div
//         id="home"
//         className="home-container flex flex-col items-center justify-center min-h-screen text-center text-white gap-6 p-6 animate-fadeIn"
//       >
//         <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-slideIn">
//           Hello, I'm <span className="text-gradient">Nikita Yadav</span>
//         </h1>
//         <h2 className="text-3xl font-semibold animate-pulse">A Front-End Developer</h2>
//         <p className="max-w-xl text-lg text-gray-300 leading-relaxed animate-fadeIn delay-300">
//           I'm a passionate web developer who enjoys creating clean and responsive user interfaces
//           using modern technologies like React, Tailwind, and JavaScript.
//         </p>
//         <div className="flex gap-6 mt-6 justify-center">
//           <a
//             href="https://github.com/Nikitayadav4048"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nikitayadav4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:nikitayadav4048@gmail.com"
//             className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Custom cursor tracking
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor" />

      {/* Navbar */}
      <nav className="navbar flex justify-between items-center px-6 py-4 shadow-md animate-slideIn relative z-50">
        <div className="text-gradient text-4xl font-bold pl-10">Nikita Yadav</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-2xl text-white pr-10">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(label => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`} className="hover:text-highlight transition">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-white text-2xl cursor-pointer pr-4" onClick={handleMenuToggle}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden bg-neutral-900 px-8 py-6 text-lg text-white flex flex-col gap-3 shadow-xl border-t border-fuchsia-700 z-40 relative text-left animate-slideInCustom">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
            <li key={label} className="border-b border-gray-800 last:border-none pb-2">
              <a
                href={`#${label.toLowerCase()}`}
                onClick={closeMenu}
                className="hover:text-highlight transition duration-300 ease-in-out hover:pl-2 block"
              >
                <i className="fas fa-angle-right pr-2 text-highlight" /> {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Hero Section */}
      <div
        id="home"
        className="home-container flex flex-col items-center justify-center min-h-screen text-center text-white gap-6 p-6 animate-fadeIn"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-slideIn">
          Hello, I'm <span className="text-gradient">Nikita Yadav</span>
        </h1>
        <h2 className="text-3xl font-semibold animate-pulse">A Front-End Developer</h2>
        <p className="max-w-xl text-lg text-gray-300 leading-relaxed animate-fadeIn delay-300">
          I'm a passionate web developer who enjoys creating clean and responsive user interfaces
          using modern technologies like React, Tailwind, and JavaScript.
        </p>
        <div className="flex gap-6 mt-6 justify-center">
          <a
            href="https://github.com/Nikitayadav4048"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl transition hover:text-highlight animate-float"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nikitayadav4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:nikitayadav4048@gmail.com"
            className="text-gray-400 text-2xl transition hover:text-highlight animate-float delay-400"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
