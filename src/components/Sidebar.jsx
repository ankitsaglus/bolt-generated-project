import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-light p-3">
      <h2>Dashboard</h2>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-light">Home</Nav.Link>
        <Nav.Link href="#" className="text-light">Analytics</Nav.Link>
        <Nav.Link href="#" className="text-light">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
