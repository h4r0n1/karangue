import React from "react";
import "./Login.css";
import { HiOutlineQrcode } from "react-icons/hi";
import NavbarComponent from "../Navbar/Navbar";

import "animate.css";

const Login = (props) => {
  const { cni, setCni, password, setPassword } = props;

  return (
    <div className="loginBody">
      <NavbarComponent />
      <div className="login">
        <div className="loginContainer animate__animated animate__zoomIn">
          <h1 className="title">Connexion</h1>
          <label htmlFor="">N⁰ d'Identification</label>
          <input
            type="text"
            placeholder="1 088 2000 01087"
            autoFocus
            required
            value={cni}
          />

          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
          />

          <div className="btnContainer">
            <>
              <button className="cta_login_btn">Se Connecter</button>

              <hr />

              <button className="cta_login_btn">
                <HiOutlineQrcode style={{ fontSize: 30 }} />{" "}
                <span> Scanner le code</span>
              </button>
            </>
            <p>Inscrivez-vous</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
