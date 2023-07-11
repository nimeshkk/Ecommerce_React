// NavigationBar.js

import React, { useState } from 'react';
import './nav.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <a href="/" className="navbar-logo">Logo</a> */}
        <button className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;




