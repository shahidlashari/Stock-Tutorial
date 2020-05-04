import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

import './style.css';

const ReactNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">Stock Tutorial</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/trending">Trending</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/signup">Signup/Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default ReactNavbar;
