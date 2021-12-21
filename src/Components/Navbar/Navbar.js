import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Container>
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        expand="lg"
        className="p-3"
      >
        <Navbar.Brand>Karangue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-end mx-4 fw-bold"
        >
          <Nav className="container d-flex justify-content-center">
            <Nav.Link as={Link} to={"/"}>
              Acceuil
            </Nav.Link>
            <NavDropdown title="Remboursement">
              <NavDropdown.Item>Pret</NavDropdown.Item>
              <NavDropdown.Item>
                <Nav>
                  <Nav.Link as={Link} to={"/remboursement"}>
                    Listes des remboursements
                  </Nav.Link>
                </Nav>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/sante"}>
              Sante
            </Nav.Link>
            <NavDropdown title="Document">
              <NavDropdown.Item href="/documents">
                Transmettre Document
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/qrcard"}>
              Ma Carte
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Nous Contacter
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/login"}>
              Connexion
            </Nav.Link>
            <Nav.Link as={Link} to={"/login"}>
              Inscription
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
