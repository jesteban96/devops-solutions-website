import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiSunLine } from 'react-icons/ri';
import { IoMdMoon } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button } from 'react-bootstrap';
import '../../themes.css';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <nav className={`navbar ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'} navbar-expand-lg`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Devops Solutions
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapsed}
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Collapse in={!isCollapsed}>
          <div className="align-items-center">
            {isDarkMode ? (
              <RiSunLine className="moon-icon" onClick={toggleTheme} />
            ) : (
              <IoMdMoon className="moon-icon text-dark" onClick={toggleTheme} />
            )}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  Acerca De
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team" className="nav-link">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contactanos
                </NavLink>
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
