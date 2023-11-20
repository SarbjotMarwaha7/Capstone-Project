// Navbar.js

import React, { useState } from "react";
import "../NavBar/NavBar.scss"; // SCSS file

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // The Navbar component
  return (
    <nav className={`navbar ${showMenu ? "show-menu" : ""}`}>
      {/* Container for the Navbar content */}
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Novel Verse</a>
        </div>
        {/* Hamburger menu for mobile/tablet view */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Dropdown menu section */}
      <div className={`dropdown-menu ${showMenu ? "show-menu" : ""}`}>
        {/* Search bar in the dropdown menu */}
        <input type="text" placeholder="Search..." />

        {/* Menu items in the dropdown */}
        <a href="#menu-item" className="menu-item">
          Series
        </a>
        <a href="#menu-item" className="menu-item">
          Bookmarks
        </a>
        <a href="#menu-item" className="menu-item">
          Help
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
