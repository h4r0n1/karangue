import React from "react";
import { Button } from "react-bootstrap";
import NavbarComponent from "../Navbar/Navbar";

import "./Accueil.css";

// Import of animate css
import "animate.css";

// Import des images

const Accueil = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="banner">
        <div className="banner-infos">
          <h1 className="animate__animated animate__fadeInLeftBig">
            Faite-vous <span>consultes</span> avec votre{" "}
            <span>carte numerique</span>
          </h1>
          <p className="animate__animated animate__fadeInRightBig">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quidem ab ut velit.
          </p>
          <div className="cta_home_btn">
            <Button
              variant="outline-light"
              className="custom_btn_1 animate__animated animate__fadeInUp"
            >
              Plus d'Infos
            </Button>
            <Button
              variant="primary"
              className="custom_btn_2 animate__animated animate__fadeInDown"
            >
              Inscription
            </Button>
          </div>
        </div>
        {/* <Carousel interval={5000}>
          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="1250px" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="500px" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={carouselImg1} height="300px" width="500px" alt="" />
          </Carousel.Item>
        </Carousel> */}
      </div>

      <div className="about">
        <img src="" alt="" />
        <div className="about_infos">
          <h1>A propos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolores ad laboriosam earum repellat, modi nulla quo
            voluptatum ipsam vitae autem voluptas expedita, voluptatibus
            veritatis praesentium assumenda soluta aliquam! Natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
