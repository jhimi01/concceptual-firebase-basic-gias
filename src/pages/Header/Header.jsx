import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  

    return (
        <>
        <nav className="navbar">
        <div className="navbar-brand">
          <Link to='/'>Firebase Authentication</Link>
          <button className="navbar-toggle" onClick={handleToggle}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul className={isOpen ? "navbar-menu open" : "navbar-menu"}>
          <Link style={{textDecoration: 'none'}} to='/'><li>Home</li></Link>
          <Link style={{textDecoration: 'none'}} to='/about'><li>About</li></Link>
          <Link style={{textDecoration: 'none'}} to='/register'><li>Register</li></Link>
          <Link style={{textDecoration: 'none'}} to='/login'><li>Login</li></Link>
        </ul>
      </nav>
     
      </>
    );
};

export default Header;