import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoutButton from './logoutButton';
import LoginButton from './loginButton';
import { useAuth0 } from '@auth0/auth0-react'

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return(
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
    </Nav>
  );
};

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          D O G G O  A P P
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile"> Profile</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item>Lol yeah nah nothings here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <AuthNav/>
      </Container>
    </Navbar>
  );
}

export default Header;