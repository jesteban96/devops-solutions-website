import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiSunLine } from 'react-icons/ri';
import { IoMdMoon } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button } from 'react-bootstrap';
import '../../themes.css';
import './Navbar.css';
import NavbarLogic from './NavbarLogic';

import logoDark from '../../media/images/free Delvery-dark.png'; // Ajusta la ruta al logo oscuro
import logoLight from '../../media/images/free Delvery.png'; // Ajusta la ruta al logo claro


const Navbar = () => {
  
  const { isDarkMode, isCollapsed, toggleTheme, toggleCollapsed } = NavbarLogic();

  return (
    <nav className={`navbar ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'} navbar-expand-lg`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className='d-flex justify-content-between'>
            <div className='me-2 mt-2 ms-2'>
              Devops Solutions
            </div>
            <div>
              <img
                src={isDarkMode ? logoDark : logoLight}
                alt="Devops Solutions Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
            </div>
          </div>
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
          <div className="">
            <ul className="navbar-nav">
              <li>
                
              </li>
              <li className="nav-item mt-2">
                {isDarkMode ? (
                  <RiSunLine className="moon-icon" onClick={toggleTheme} />
                ) : (
                  <IoMdMoon className="moon-icon text-dark" onClick={toggleTheme} />
                )}
              </li>
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
