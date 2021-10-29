import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Pasaje = ({ pasaje, pasajes, changuito, agregarPasaje }) => {
  const { id, articulo, precio, cantidad } = pasaje;

  // funcion para agregar pasajes al changuito
  const seleccionarPasaje = (id) => {
    const pasaje = pasajes.filter((pasaje) => pasaje.id === id)[0];
    const productosEnElChanguito = changuito.filter((pasaje) => pasaje.id === id)
    if(productosEnElChanguito != null ){
      pasaje.cantidad += 1;
    }
    //Agrego los productos al changuito
    agregarPasaje(pasajes);)
    
    agregarPasaje([...changuito, pasaje]); //se indica que no se sobreescriba sino que se agregue al final
    console.log(changuito);
    //console.log(pasaje);
  };

  // funcion para quitar pasajes del changuito
  //const eliminarPasaje = (id) => {
  //  const pasaje = pasajes.remove((pasaje) => pasaje.id === id)[0];
  //  console.log(changuito);
  //  console.log("Quitando pasajes del changuito:", id);
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
