import React, { useState } from 'react';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <div className="main-menu">
      <div className="logo">
        <h2>Namrata</h2>
      </div>
      <nav>
        <button id="mobileNavBtn" onClick={toggleMobileNav}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={isNavVisible ? "showMblNav" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#introduction">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
