import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Pasaje = ({ pasaje, pasajes, changuito, agregarPasaje }) => {
  const { id, articulo, precio, cantidad } = pasaje;

  // funcion para agregar pasajes al changuito
  const seleccionarPasaje = (id) => {
    const pasajeAAgregar = pasajes.filter((pasaje) => pasaje.id === id)[0];

    const pasajesEnElChanguito = changuito.filter(
      (pasaje) => pasaje.id === id
    )[0];
    if (pasajesEnElChanguito != null) {
      pasajesEnElChanguito.cantidad += 1;
    } else {
      agregarPasaje([...changuito, pasaje]); //se indica que no se sobreescriba sino que se agregue al final
    }

    //console.log(pasaje);
    console.log(changuito);
  };

  // funcion para quitar pasajes del changuito
  //const eliminarPasaje = (id) => {
  //  const pasaje = pasajes.remove((pasaje) => pasaje.id === id)[0];   ->>>>> averiguar como alternativa mas sencilla
  //  console.log(changuito);
  //};

  const eliminarPasaje = (id) => {
    //Me quedo con los productos que no son el que estoy borrando
    const pasajes = changuito.filter((pasaje) => pasaje.id !== id);
    //Agrego los productos al changuito
    agregarPasaje(pasajes);
  };

  return (
    <Fragment>
      <div>
        <h3>
          {id} - {articulo} - {precio} - {cantidad}
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
