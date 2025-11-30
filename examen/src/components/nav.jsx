import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src="/logoo.png" alt="Wikigames Logo" className="logo-img" />
          <span className="logo-text">WIKIGAMES</span>
        </Link>

        {/* Menú de navegación */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/profile" className="nav-link">Perfil</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;