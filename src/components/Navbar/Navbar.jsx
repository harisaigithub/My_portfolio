import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <div className={`sticky-top ${isActive ? 'active' : ''}`}>
      <div className="nbox1">
        <div className="nbox11">
          <a className='nbo' href="www.example.com">
            Portfolio.
          </a>
        </div>
        <div className="nbox12">
          <div className="ll">
            <ul className={`nav-list ${isActive ? 'active' : ''}`}>
              <li><Link to="home-container" smooth={true} duration={500} onClick={closeNav}>Home</Link></li>
              <li><Link to="hmain" smooth={true} duration={500} onClick={closeNav}>About Me</Link></li>
              <li><Link to="econtainer1" smooth={true} duration={500} onClick={closeNav}>Career</Link></li>
              <li><Link to="scontainer1" smooth={true} duration={500} onClick={closeNav}>Skills</Link></li>
              <li><Link to="pcontainer1" smooth={true} duration={500} onClick={closeNav}>Projects</Link></li>
              <li><Link to="cont0" smooth={true} duration={500} onClick={closeNav}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="nbox13">
          <a className='hireme' href="https://www.canva.com/design/DAF5foCas_c/HvuS7R5LdrdxCXK7EaZUNw/view?utm_content=DAF5foCas_c&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
            Hire Me
          </a>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          &#9776;
        </div>
      </div>
    </div>
  );
}

export default Navbar;
