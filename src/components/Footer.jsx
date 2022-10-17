import React from "react";
import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div>
          <h1>Crops</h1>
          <p>A farmer is a magician who produces money from the mud.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <h4>Project</h4>
          <a href="/">Status</a>
          <a href="/">Insurance</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Supervisior</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Othres</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
