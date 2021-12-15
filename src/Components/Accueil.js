import React from "react";
import { Carousel } from "react-bootstrap";
import NavbarComponent from "./Navbar/Navbar";

const Accueil = () => {
  return (
    <div>
      <NavbarComponent />
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="image" src="doct.webp" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Accueil;
