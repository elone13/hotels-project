import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LOGO from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className="header-container">
    <header className="header">
      <div className="logo">
      <img src={LOGO} alt="logo" />
      </div>
      <nav className="nav-link">
      <ul>
                    <li>
                        <NavLink to="/" 
                         className={({ isActive}) =>
                            [ 
                              isActive ? "active" : "notActive",
                            ]
                          }
                        
                        >HOME</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" 
                         className={({ isActive}) =>
                            [ 
                              isActive ? "active" : "notActive",
                            ]
                          }
                        >ABOUT</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" 
                         className={({ isActive}) =>
                            [ 
                              isActive ? "active" : "notActive",
                            ]
                          }
                        >CONTACT</NavLink>
                    </li>
                </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
