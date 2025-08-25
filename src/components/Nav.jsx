import React, { useState, useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Nikita Yadav</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl focus:outline-none transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gray-800 w-full py-4 space-y-4 transition-all duration-300">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)} // close menu when a link is clicked
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;