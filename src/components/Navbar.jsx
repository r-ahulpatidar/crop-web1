import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import "./NavbarStyles.css";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <nav className="nav-bar">
      <h1 className="nav-logo">Crops</h1>
      <div>
        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.URL}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div onClick={handleClick} className="btn-icon">
          <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
