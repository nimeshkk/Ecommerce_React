import React, { useRef } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>logo</h3>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}


