import React from "react";
import QRCode from "qrcode.react";
import "./Carte.css";
import NavbarComponent from "../Navbar/Navbar";
// Import of animate css
import "animate.css";

const Carte = () => {
  return (
    <div className="cardBody">
      <NavbarComponent />
      <h1 className="animate__animated animate__fadeInLeftBig">
        Scanner ce code pour vous connecter
      </h1>
      <div className="cardContainer animate__animated animate__zoomIn">
        <div className="carte">
          <QRCode
            id="abc"
            value="scan me"
            style={{ width: 150, height: 150 }}
          />
          <p className="textqr">Scanner ce code</p>
        </div>
      </div>
    </div>
  );
};

export default Carte;
