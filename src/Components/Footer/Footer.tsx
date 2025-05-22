import React from 'react';
import './Footer.css';
import logo from '../../assets/Group 41.png'
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col logo-col">
          <div className="logo"><img src={logo} alt="logo" /></div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
          </p>
        </div>

        <div className="footer-col">
          <h4>Service</h4>
          <ul>
            <li>Payment & Tax</li>
            <li>Features</li>
            <li>View Booking</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>News</li>
            <li>Pricing</li>
            <li>New Property</li>
          </ul>
        </div>

        <div className="footer-col location-col">
          <h4>Our Location</h4>
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          <div className="social-icons">
            <a href="#"><span className="icon">f</span></a>
            <a href="#"><span className="icon">t</span></a>
            <a href="#"><span className="icon">in</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2024 flora. All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
