import React from "react";
import NavbarComponent from "../Navbar/Navbar";

const Remboursement = () => {
  const fakeData = [
    {
      id: 1,
      datePret: "26/04/2021",
      rembourserAvant: "08/12/2021",
      montantARembourser: "690983,55",
    },
    {
      id: 2,
      datePret: "30/08/2021",
      rembourserAvant: "20/01/2021",
      montantARembourser: "181119,06",
    },
    {
      id: 3,
      datePret: "29/05/2021",
      rembourserAvant: "14/02/2021",
      montantARembourser: "304788,72",
    },
    {
      id: 4,
      datePret: "15/05/2021",
      rembourserAvant: "05/09/2021",
      montantARembourser: "943272,51",
    },
    {
      id: 5,
      datePret: "24/08/2021",
      rembourserAvant: "05/11/2021",
      montantARembourser: "39547,53",
    },
    {
      id: 6,
      datePret: "06/05/2021",
      rembourserAvant: "15/03/2021",
      montantARembourser: "861849,91",
    },
    {
      id: 7,
      datePret: "09/03/2021",
      rembourserAvant: "17/05/2021",
      montantARembourser: "649796,76",
    },
    {
      id: 8,
      datePret: "22/04/2021",
      rembourserAvant: "07/05/2021",
      montantARembourser: "82443,12",
    },
    {
      id: 9,
      datePret: "03/12/2021",
      rembourserAvant: "04/01/2021",
      montantARembourser: "140816,44",
    },
    {
      id: 10,
      datePret: "29/03/2021",
      rembourserAvant: "17/10/2021",
      montantARembourser: "703851,70",
    },
  ];

  return (
    <div>
      <NavbarComponent />

      <div className="container ">
        {/* <ul>
        {fakeData.map((item) => (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.datePret}</div>
            <div>{item.rembourserAvant}</div>
            <div>{item.montantARembourser}</div>
          </li>
        ))}
      </ul> */}
        <div className="d-flex align-items-center justify-content-between mt-5">
          <h4>Liste Remboursements</h4>
          <button className="btn btn-primary">Faire un pret</button>
        </div>

        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th className="text-center">Montant a rembourser</th>
              <th className="text-center">Date pret</th>
              <th className="text-center">A rembourser avant</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.montantARembourser}</td>
                <td className="text-center">{item.datePret}</td>
                <td className="text-center">{item.rembourserAvant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Remboursement;
