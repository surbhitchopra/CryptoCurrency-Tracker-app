import React from 'react';
import { Nav } from 'react-bootstrap';
import './Navtab.css'; // Import the new CSS file

const Navtab = () => {
  return (
    <div className="navbar-container">
      <h2 className="brand">CryptoCurrencyTracker</h2>
      <Nav className="nav-links">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navtab;

