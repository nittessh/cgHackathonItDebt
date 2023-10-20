import React from 'react';
import logo from './Capgemini-Emblem.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Capgemini Logo" className="icon" />
    </div>
  );
};

export default Header;
