import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="nav-box">
      <Container className="brand-wrap">
        <Navbar.Brand className="brand" href="/">
          DH
        </Navbar.Brand>
      </Container>
      <Container className="menu-wrap">
        <Nav className="mx-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
