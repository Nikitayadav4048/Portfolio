import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Nikita Yadav - MERN Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;