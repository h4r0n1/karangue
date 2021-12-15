import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" sticky="top" expand="lg">
        <Navbar.Brand>Karangue</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
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
              <NavDropdown.Item>Transmettre Document</NavDropdown.Item>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
