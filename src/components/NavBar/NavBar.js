import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-2 fw-bold">Quizhoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/home' className="nav-link">Home</Link>
            <Link to='/topics' className="nav-link">Topics</Link>
            <Link to='/statistic' className="nav-link">Statistic</Link>
            <Link to='/blog' className="nav-link">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
