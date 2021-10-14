import Header from "./components/Header";
import Footer from "./components/Footer";
import Pasaje from "./components/Pasaje";
import { useState, Fragment } from "react";
import Changuito from "./components/Changuito";

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

  // state para changuito
  const [changuito, agregarPasaje] = useState([]); //array vacio porque empieza vacio :P

  // Puede haber como MAX 1 tag en lo que retorna la funcion.
  return (
    // Tiene que haber 1 solo DIV en lo que retorna esta funcion
    // O, puedo usar el componente Fragment cuando tengo que poner mas de unDIV (BUENA PRACTICA)
    <Fragment>
      <Header />
      <h1>Tourist World - Tienda Online</h1>
      {pasajes.map((pasaje) => (
        <Pasaje
          key={pasaje.id} // para que cada pasaje sea unico
          pasaje={pasaje}
          pasajes={pasajes}
          changuito={changuito}
          agregarPasaje={agregarPasaje}
        />
      ))}
      <Changuito changuito={changuito} agregarPasaje={agregarPasaje} />
      <Footer anio={2021} />
    </Fragment>
  );
}

export default App;
