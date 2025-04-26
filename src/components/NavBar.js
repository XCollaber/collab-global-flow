
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/" className="logo-text">XCollaber</a>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#waitlist" className="nav-link waitlist-btn">Join Waitlist</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
