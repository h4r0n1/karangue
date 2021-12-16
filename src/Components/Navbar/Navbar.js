import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="transparent" variant="light" sticky="top" expand="lg">
        <Navbar.Brand>Karangue</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-end mx-4 fw-bold">
          <Nav className="">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
