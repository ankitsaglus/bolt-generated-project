import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Topbar() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#profile">User Profile</Nav.Link>
        <Nav.Link href="#notifications">Notifications</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Topbar;
