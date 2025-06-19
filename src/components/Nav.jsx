      
// import React from 'react'
//  import "./home.css" ;
// const Nav = () => {
//   return (
//     <div>
//       {/* Navbar Section */}
//       <nav className="navbar flex justify-between items-center px-6 py-4 bg-dark shadow-md ">
//         <div className="text-gradient text-2xl font-bold pl-10">Nikita Yadav</div>
//         <ul className={`lg:flex gap-8 text-gray-300 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
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
//             <a href="#portfolio">Portfolio</a>
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
//     </div>
//   )
// }

// export default Nav



import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Nikita Yadav</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
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
      <div
        className={`lg:hidden flex flex-col items-center bg-gray-800 w-full py-4 space-y-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;