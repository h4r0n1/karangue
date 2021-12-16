import React from "react";
import { Carousel } from "react-bootstrap";
import NavbarComponent from "./Navbar/Navbar";

// Import des images
import carouselImg1 from "../images/carouselImg1.png";

const Accueil = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="d-block align-items-center justify-content-center mt-5 w-75">
        <Carousel interval={5000}>
          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="1250px" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="500px" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="500px" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Accueil;
