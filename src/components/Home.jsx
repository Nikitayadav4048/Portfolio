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
