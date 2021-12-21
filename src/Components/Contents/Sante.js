import "bootstrap/dist/css/bootstrap.min.css";
import "./Sante.css";
import { MdFactCheck } from "react-icons/md";
import { BsJournalPlus } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaTablets } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { MdOutlineEmergency } from "react-icons/md";
import { FaMemory } from "react-icons/fa";
import doctorw from "../../images/doctorw.jpg";
function Sante() {
  return (
    <div className=" container-sante">
      <div className="container-fluid sante justify-content-center pr-2">
        <h1 className="title">Sante</h1>
        <p className="para-sante">Accueil Sante</p>
      </div>
      <div className="container">
        <div className=" row section-cards text-center ">
          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <FaUserMd />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Mèdecin Expert</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <MdFactCheck />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Diagnostic</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <BsJournalPlus />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Pathologie</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <FaTooth />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Soins Dentaires</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" row section-cards text-center ">
          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <FaHeartbeat />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Cardiologie</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card">
              <div className="icone">
                <FaTablets />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Mèdecine</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <FaDna />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Neurologie</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card ">
              <div className="icone">
                <FaAmbulance />
              </div>

              <div class="card-body">
                <h5 className="card-title title-card ">Ambulance</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ............................Our Expertises................................... */}
      <div className="container contain2 ">
        <h1>Notre Expertise</h1>
        <div className="row section-cards text-center">
          <div className="col-lg-6">
            {" "}
            <div className="d-flex ">
              <div className="card card">
                <div className="icone-icone ">
                  <FaUserMd />
                </div>

                <div class="card-body">
                  <h5 className="card-title title-card ">Docteur Certifié</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>

              <div className="card mx-4 ">
                <div className="icone-icone">
                  <MdOutlineEmergency />
                </div>

                <div class="card-body">
                  <h5 className="card-title title-card ">Urgence</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="d-flex mt-4">
              <div className="card ">
                <div className="icone-icone">
                  <FaMemory />
                </div>

                <div class="card-body">
                  <h5 className="card-title title-card ">Enseignements</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>

              <div className="card mx-4 ">
                <div className="icone-icone">
                  <FaAmbulance />
                </div>

                <div class="card-body">
                  <h5 className="card-title title-card ">Ambulance</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-doctor ">
              {" "}
              <img src={doctorw} alt="image-doctor" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sante;
