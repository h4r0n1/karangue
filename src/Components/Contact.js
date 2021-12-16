import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FooterPage from "./Footer/Footer";

import NavbarComponent from "./Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <NavbarComponent />
      
      <img src="mage1.jpg" className="Body"/>
      <h2 className="ecrit">Contact us</h2>
      <div className="contact">
        <h2>Contact</h2>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type=""  />
    </Form.Group>

    <Form.Group as={Col} controlId="">
      <Form.Label>Password</Form.Label>
      <Form.Control type="" placeholder="" />
    </Form.Group>
  </Row>
  <Row className="mb-4">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Message</Form.Label>
      <Form.Control type="text" placeholder="mettez votre message" />
    </Form.Group>
  </Row>

  
 

  <Button variant="primary" type="submit">
    Envoyer
  </Button>
</Form>
      
        {/* <div className="button1">
          <Button variant="secondary" href="/">
            Annuler
          </Button>{" "}
          <h2></h2>
          <Button variant="success">Envoyer</Button>{" "}
        </div> */}
      </div>
     <FooterPage/>
    </div>
  );
};

export default Contact;
