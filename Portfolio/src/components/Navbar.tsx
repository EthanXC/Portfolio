import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/bio" className="nav-link">Bio</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
    </nav>
  );
};

export default Navbar;
