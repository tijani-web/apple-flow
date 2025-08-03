import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaApple, FaHome, FaInfoCircle, FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <FaApple />
      </div>
      <nav className="sidebar-menu">
        <NavLink to="/" className="sidebar-icon" title="Home">
          <FaHome />
        </NavLink>
        <NavLink to="/about" className="sidebar-icon" title="About">
          <FaInfoCircle />
        </NavLink>
        <a
          href="https://github.com/tijani-web/apple-flow.git"
          className="sidebar-icon"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </nav>
    </aside>
  );
}

