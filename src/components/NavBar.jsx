import { Link, useLocation } from "react-router-dom";
import React from "react";

import '../styles/components/navbar.css'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isMainPage = location.pathname === '/';
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <nav>
            <div className="navbar">
                <Link to="/" className="navbar-brand">MochaPay</Link>
                
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                
                <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">

                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    { ( isMainPage ? (
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            
                    ) : 
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;