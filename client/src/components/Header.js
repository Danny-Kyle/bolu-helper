import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    
    <Navbar expand="lg" style={{ backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <Container>
      <Navbar.Brand href="#home" className='text-primary ml-4'>
        <b>BirthRight</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav mr-4">
        <Nav className="ml-auto">
          <Nav.Link href="#help">Help</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
 
  
  );
};

export default Header;
