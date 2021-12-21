import React from "react";
import "./Sante.css";
import { BiSearch } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { MdOutlineLocalHospital } from "react-icons/md";
import NavbarComponent from "../Navbar/Navbar";

// Import of animate css
import "animate.css";

// Import des images
import hopital from "../../images/hopital.jpg";

const Sante = () => {
  return (
    <div>
      <NavbarComponent />

      <div className=" section">
        <div className="title-sante">
          <div className="title-infos">
            <p className="animate__animated animate__zoomIn">
              Sante - l'Hopital ou la Pharmacie la plus proche
            </p>
          </div>
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
        <div className="hopitaux">
          <div className="myHospital">
            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>

            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>

            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>

            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>

            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>

            <div className="card">
              <MdOutlineLocalHospital />
              <h1>Pharmacie</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel delectus, animi quasi atque consequuntur nobis nisi
                ipsa optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sante;
