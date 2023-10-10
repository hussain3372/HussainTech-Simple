import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer">
        <div className="foot">
          <div className="dada">
            Hussain <span className="span">Tech</span>
          </div>
          <div className="foots">
            <div className="foot-line">
              <ul>
                <h1>Contact</h1>
                <li>About Us</li>
                <li>Programs</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="foot-line">
              <ul>
                <h1>Terms</h1>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>DMCA</li>
              </ul>
            </div>
            <div className="foot-line">
              <ul>
                <h1>Menu</h1>
                <li>About Us</li>
                <li>Programs</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
