import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar className="flex-column">
        <Navbar.Brand className="text-white">HOLLARD LIFE</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className="text-white active">
            <i className="bi bi-house-door-fill mr-2"></i> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/policies" className="text-white">
            <i className="bi bi-file-earmark-text-fill mr-2"></i> Policies
          </Nav.Link>
          <Nav.Link as={Link} to="/analytics" className="text-white">
            <i className="bi bi-bar-chart-fill mr-2"></i> Analytics
          </Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white">
            <i className="bi bi-gear-fill mr-2"></i> Settings
          </Nav.Link>
        </Nav>
        <Nav className="flex-column mt-auto">
          <Nav.Link as={Link} to="/profile" className="text-white">
            <i className="bi bi-person-circle mr-2"></i> Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Sidebar;
