import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      DysNova.
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      
      <li>
      <Link to='/games' >
      Free Testing
        </Link>
        
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
    
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/login" className="login">
     Login
    </a>
    <a href=""></a>
   
  
  </div>
</nav>
);
};

export default Navbar;