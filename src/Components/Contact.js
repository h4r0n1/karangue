import React from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import NavbarComponent from "./Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="contact">
        <h2>Contact</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              <h6>Prenom :</h6>
            </Form.Label>
            <Form.Control type="email" placeholder="modou moustapha" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <h6>Nom :</h6>
            </Form.Label>
            <Form.Control type="email" placeholder="Diakhaby" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6>Entrer votre e-mail :</h6>
            </Form.Label>
            <Form.Control type="email" placeholder="karengue@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h6>Veillez mettre votre message :</h6>
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <div className="button1">
          <Button variant="secondary" href="/">
            Annuler
          </Button>{" "}
          <h2></h2>
          <Button variant="success">Envoyer</Button>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
