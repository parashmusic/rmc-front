import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/Twitter.svg';
import youtubeIcon from '../assets/Youtube.svg';
import discordIcon from '../assets/Discord.svg';

const Footer = () => {
  const location = useLocation();

  // Hide footer on the contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-bar">
        <div className="social-icons">
          <img src={instagramIcon} alt="Instagram" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={youtubeIcon} alt="YouTube" />
          <img src={discordIcon} alt="Discord" />
        </div>
        <div className="connect">
          <h3>Connect with us</h3>
        </div>
      </div>
      <div className="terms">
        <p>&copy; 2024 Regional Music Centre. All rights reserved</p>
        <p>Terms and conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
