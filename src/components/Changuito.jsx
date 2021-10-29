// ATAJOS:
// imr -> import
// sfc -> estructura

import React from "react";
import { Fragment } from "react";
import "./changuito.css";
import Pasaje from "./Pasaje";

const Changuito = ({ changuito, agregarPasaje }) => {
  //TODO: implementar logica para que se puedan agregar mas de 1 pasaje con el mismo destino

  return (
    <Fragment>
      <div className="changuito">
        <h3>Changuito de compras</h3>
        {changuito.map((pasaje, idx) => (
          <Pasaje
            key={idx}
            pasaje={pasaje}
            changuito={changuito}
            agregarPasaje={agregarPasaje}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Changuito;
