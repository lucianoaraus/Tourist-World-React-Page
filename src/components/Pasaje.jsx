import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Pasaje = ({ pasaje, pasajes, changuito, agregarPasaje }) => {
  const { id, articulo, precio } = pasaje;

  // funcion para agregar pasajes al changuito
  const seleccionarPasaje = (id) => {
    const pasaje = pasajes.filter((pasaje) => pasaje.id === id)[0];
    agregarPasaje([...changuito, pasaje]); //se indica que no se sobreescriba sino que se agregue al final
    console.log(changuito);
    //console.log(pasaje);
  };

  // funcion para quitar pasajes del changuito
  const eliminarPasaje = (id) => {
    console.log("Quitando pasajes del changuito:", id);
    //TODO: implementar
  };

  return (
    <Fragment>
      <div>
        <h3>
          {id} - {articulo} - {precio}
        </h3>
        {pasajes ? (
          <button type="button" onClick={() => seleccionarPasaje(id)}>
            Comprar
          </button>
        ) : (
          <button type="button" onClick={() => eliminarPasaje(id)}>
            Eliminar
          </button> //sintaxis tip= () => == "para cuando..."
        )}
      </div>
    </Fragment>
  );
};

export default Pasaje;
