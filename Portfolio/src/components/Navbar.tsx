import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/bio">Bio</Link> |{" "}
      <Link to="/resume">Resume</Link>
    </nav>
  );
};

export default Navbar;
