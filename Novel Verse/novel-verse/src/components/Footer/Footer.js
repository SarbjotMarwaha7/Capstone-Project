//Footer.js

import React from "react";
import "./Footer.scss"; // Import the corresponding styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebook,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons from FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      {/* Title of the footer */}
      <div className="footer-title">
        <a href="/">Novel Verse</a>
      </div>
      {/* Footer navigation links */}
      <div className="footer-links">
        <a href="/about" className="footer-link">
          About Us
        </a>
        <a href="/announcements" className="footer-link">
          Announcements
        </a>
        <a href="/contact" className="footer-link">
          Contact Us
        </a>
      </div>

      {/* Footer icons with links */}
      <div className="footer-icons">
        {/* Facebook icon */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        </a>

        {/* Twitter icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
        </a>

        {/* Discord icon */}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FontAwesomeIcon icon={faDiscord} className="footer-icon" />
        </a>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Copyright information */}
      <p className="footer-copyright">
        © 2023 Novel Verse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
