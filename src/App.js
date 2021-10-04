import Header from "./components/Header";
import Footer from "./components/Footer";
import Pasaje from "./components/Pasaje";
import { useState, Fragment } from "react";

function App() {
  // Listado de pasajes con un state

  const [pasajes, guardarPasajes] = useState([
    // pasajes: objetos a los que hago referencia
    // guardarPasajes: funcion para esos productos

    { id: 1, articulo: "Pasaje a Maldivias", precio: 700 },
    { id: 2, articulo: "Pasaje a Cataratas", precio: 100 },
    { id: 3, articulo: "Pasaje a Osaka", precio: 650 },
    { id: 4, articulo: "Pasaje a Milan", precio: 325 },
    { id: 5, articulo: "Pasaje a Barcelona", precio: 376 },
  ]);

  // Puede haber como MAX 1 tag en lo que retorna la funcion.
  return (
    // Tiene que haber 1 solo DIV en lo que retorna esta funcion
    // O, puedo usar el componente Fragment cuando tengo que poner mas de unDIV (BUENA PRACTICA)
    <Fragment>
      <Header />
      <h1>Turist World - Tienda Online</h1>
      {pasajes.map((pasaje) => (
        <Pasaje pasaje={pasaje} />
      ))}
      <Footer anio={2021} />
    </Fragment>
  );
}

export default App;
