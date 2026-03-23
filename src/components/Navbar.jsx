import React from 'react';

function Navbar() {
  return (
    <nav className="navbar animate-fade-up">
      <div className="navbar-container">
        <a href="#" className="nav-logo">T. Rithwik</a>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
