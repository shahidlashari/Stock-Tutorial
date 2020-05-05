import React from 'react';
import { Image, Navbar, Nav } from "react-bootstrap";
import logo from '../../images/logo.svg';
import './style.css';

const ReactNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">
      <Image src={logo} width="100" height="50" className="d-inline-block align-top logo" alt="Stock Tutorial Logo" rounded /><h3 className="logo-text">Stock Tutorial</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/trending">Trending</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/signup">Sign-Up/Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default ReactNavbar;
