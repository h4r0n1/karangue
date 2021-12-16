import React from "react";
import "./Sante.css";
import { BiSearch } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import NavbarComponent from "../Navbar/Navbar";

// Import of animate css
import "animate.css";

// Import des images
import hopital from "../../images/hopital.jpg";

const Sante = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid section">
        <div className="title">
          <p className="animate__animated animate__fadeInLeftBig">
            Sante - l'Hopital ou la Pharmacie la plus proche
          </p>
        </div>

        <div className="searchBox">
          <div className="search">
            <div className="cta_search">
              <BiSearch />
              <input type="search" placeholder="Recherche" />
              <BsMic />
            </div>
          </div>
        </div>

        {/** == == == Section Hopitaux == == == */}
        <div id="hopitaux">
          <div id="myHospital">
            <div className="card">
              <img src={hopital} alt="Hopital" />
              <div className="cardContent">
                <p>Dakar-Grand-Yoff</p>
              </div>
            </div>

            <div className="card">
              <img src={hopital} alt="Hopiatal" />
              <div className="cardContent">
                <p>Dakar-Grand-Yoff</p>
              </div>
            </div>

            <div className="card">
              <img src={hopital} alt="Hopiatal" />
              <div className="cardContent">
                <p>Dakar-Grand-Yoff</p>
              </div>
            </div>

            <div className="card">
              <img src={hopital} alt="Hopiatal" />
              <div className="cardContent">
                <p>Dakar-Grand-Yoff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sante;
