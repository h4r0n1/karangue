import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import NavbarComponent from "../Navbar/Navbar";
import "./TransfertDoc.css";
import "animate.css";

const TransfertDoc = () => {
  return (
    <div>
      <NavbarComponent />
      <h1 className="titre animate__animated animate__zoomIn">
        Transmettre mes documents
      </h1>
      <div className="docs animate__animated animate__zoomIn">
        <div className="docsContainer">
          <label for="name" className="form-label">
            Prenoms & noms
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <FaUser />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Nom Complet"
              aria-label="Username"
              id="name"
              aria-describedby="basic-addon1"
            />
          </div>

          <label for="email" className="form-label">
            Email
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <MdEmail />
            </span>
            <input
              type="mail"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              id="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <label for="fichier" className="form-label">
            Choisir le fichier
          </label>
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" for="inputGroupFile02">
              <BsUpload />
            </label>
          </div>

          <label for="commentaire" className="form-label">
            Commentaires
          </label>
          <div className="input-group">
            <textarea
              className="form-control"
              aria-label="With textarea"
              placeholder="Commentaires..."
              id="commentaire"
            ></textarea>
          </div>
          <div className="cta_submit_doc">
            <button className="btn btn-primary">Soumettre</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransfertDoc;
