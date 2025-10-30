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
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Nikita</span>
          </h1>
          <h2 className="hero-subtitle">MERN Stack Developer</h2>
          <p className="hero-description">
            I create modern, responsive web applications using MongoDB, Express.js, React, and Node.js. 
            Passionate about clean code and exceptional user experiences.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <a href="/Nikita-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">View Resume</a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Nikitayadav4048" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nikitayadav4" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:nikitayadav4048@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <a href="#about"><div className="scroll-arrow"></div></a>
        </div>
      </div>
    </>
  );
};

export default Home;
