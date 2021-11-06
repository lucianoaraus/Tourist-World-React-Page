import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Pasaje = ({ pasaje, pasajes, changuito, agregarPasaje }) => {
  const { id, articulo, precio, cantidad, descripcion } = pasaje;

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
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">{articulo}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{descripcion}</p>
        <p class="lead mb-4">Precio final {precio}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          {pasajes ? (
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-sm-3"
              onClick={() => seleccionarPasaje(id)}
            >
              Comprar
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              onClick={() => eliminarPasaje(id)}
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pasaje;
