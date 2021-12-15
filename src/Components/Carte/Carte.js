import React from "react";
import QRCode from "qrcode.react";
import "./Carte.css";

const Carte = () => {
  return (
    <div className="cardBody">
      <h1>this is the card component</h1>
      <div className="cardContainer">
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
