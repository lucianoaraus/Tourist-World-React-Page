import Header from "./components/Header";
import Headline from "./components/Headline";
import Footer from "./components/Footer";
import Pasaje from "./components/Pasaje";
import { useState, Fragment } from "react";
import Changuito from "./components/Changuito";

function App() {
  // Listado de pasajes con un state
  const [pasajes] = useState([
    // pasajes: objetos a los que hago referencia
    // guardarPasajes: funcion para esos productos

    {
      id: 1,
      articulo: "Pasaje a Maldivias",
      descripcion: "Experiencia unica hacia las hermosas islas",
      precio: "$" + " " + 180000,
      cantidad: 0,
    },
    {
      id: 2,
      articulo: "Pasaje a Cataratas",
      descripcion: "Experiencia unica hacia una de las maravillas del mundo",
      precio: "$" + " " + 50000,
      cantidad: 0,
    },
    {
      id: 3,
      articulo: "Pasaje a Osaka",
      descripcion: "Experiencia unica hacia las hermosas islas",
      precio: "$" + " " + 150000,
      cantidad: 0,
    },
    {
      id: 4,
      articulo: "Pasaje a Milan",
      descripcion: "Experiencia unica hacia las hermosas islas",
      precio: "$" + " " + 230000,
      cantidad: 0,
    },
    {
      id: 5,
      articulo: "Pasaje a Barcelona",
      descripcion: "Experiencia unica hacia las hermosas islas",
      precio: "$" + " " + 190000,
      cantidad: 0,
    },
  ]);

  // state para changuito
  const [changuito, agregarPasaje, eliminarPasaje] = useState([]); //array vacio porque empieza vacio :P

  // Puede haber como MAX 1 tag en lo que retorna la funcion.
  return (
    // Tiene que haber 1 solo DIV en lo que retorna esta funcion
    // O, puedo usar el componente Fragment cuando tengo que poner mas de unDIV (BUENA PRACTICA)

    <div class="container col-xxl-8 px-4 py-5">
      <Header></Header>
      <Headline></Headline>
      <div class="row">
        <div class="col">
          <div class="px-4 py-5 my-5 text-center">
            {pasajes.map((pasaje) => (
              <Pasaje
                key={pasaje.id} // para que cada pasaje sea unico
                pasaje={pasaje}
                pasajes={pasajes}
                changuito={changuito}
                agregarPasaje={agregarPasaje}
                eliminarPasaje={eliminarPasaje}
              />
            ))}
            <Changuito
              changuito={changuito}
              agregarPasaje={agregarPasaje}
              eliminarPasaje={eliminarPasaje}
            />
            <Footer anio={2021} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
