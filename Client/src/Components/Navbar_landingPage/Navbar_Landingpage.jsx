import React, { useState } from 'react';
import './Navbar_Landingpage.css';
import { useNavigate } from 'react-router-dom';
import company_logo from '../../images/company_logo.jpeg';

const Navbar_Landingpage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbarHomepage-container">
      <div className="companyHomepage-logo">
        <img src={company_logo} alt="Company Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>
      <nav
        className={`userHomepage-navigator-div ${
          isMenuOpen ? "menu-active" : ""
        }`}
      >
          <span className="loginHomepage-container">
            Enterprise
          </span>
        <span
          onClick={() => handleNavigation('/business')}
          className="loginHomepage-container"
        >
          Business
        </span>
        <span
          onClick={() => handleNavigation('/education')}
          className="loginHomepage-container"
        >
          Education
        </span>
        <span
          onClick={() => handleNavigation('/about')}
          className="loginHomepage-container"
        >
          About Us
        </span>
        <span
          onClick={() => handleNavigation('/contactus')}
          className="loginHomepage-container"
        >
          Contact Us
        </span>
        <span
          onClick={() => handleNavigation('/login')}
          className="loginHomepage-container"
        >
          Log In
        </span>
        <button
          className="demoHomepage-container"
          onClick={() => handleNavigation('/requestdemo')}
        >
          Request Demo
        </button>
      </nav>
    </div>
  );
};

export default Navbar_Landingpage;