import React from "react";
import "./Footer.css";

const FooterPage = () => {
  return (
    <div className="footer_banner">
      <div className="footer_banner-infos">
        <div className="contacts_part">
          <h1>Contactez nous</h1>
          <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
          </ul>
        </div>

        <div className="quick_links_part">
          <h1>Liens Rapides</h1>
          <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
          </ul>
        </div>

        <div className="services_part">
          <h1>Nos Services</h1>
          <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
          </ul>
        </div>

        <div className="feedback_part">
          <h1>Feedback</h1>
          <form action="">
            <input type="text" placeholder="Prenom" id="name" name="name" />

            <input type="text" placeholder="Email" id="eamil" name="eamil" />

            <textarea
              name="message"
              id="message"
              cols="10"
              rows="0"
              placeholder="Message"
            ></textarea>
          </form>
          <button>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
