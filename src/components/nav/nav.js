import React, { useState } from 'react';
import './nav.css';
import '../../components/nav/nav.css';
import Logo from '../../assets/img/(11).png';
import { FiShoppingCart } from 'react-icons/fi';
import { LuAlignJustify } from 'react-icons/lu';

export default function Nav() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>OrderSite</span>
      </div>

      <div className="right">
        <div className={`menu ${active ? 'active' : ''}`}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <input type="text" className="search" placeholder="Search" />
        <FiShoppingCart className="cart" />
        <LuAlignJustify className="menu-bars" onClick={toggleMenu} />

        {active && (
          <div className="dropdown-menu">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

