import React from 'react';
import { useLocation } from 'react-router-dom';
import { Image, Navbar, Nav } from 'react-bootstrap';
import LogoImg from '../../images/logo.svg';
import './style.css';

const ReactNavbar = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">

      <Navbar.Brand href="/home">
        <Image src={LogoImg} width="100" height="50" className="d-inline-block align-top logo" alt="Stock Tutorial Logo" rounded />
        <h3 className="logo-text">Stock Tutorial</h3>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home" className={location.pathname === '/home' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
          <Nav.Link href="/trending" className={location.pathname === '/trending' ? 'nav-link active' : 'nav-link'}>Trending</Nav.Link>
          <Nav.Link href="/dashboard" className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard</Nav.Link>
          <Nav.Link href="/signup" className={location.pathname === '/signup' ? 'nav-link active' : 'nav-link'}>Sign-Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ReactNavbar;
