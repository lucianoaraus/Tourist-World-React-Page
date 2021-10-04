import React from "react";

//Forma con props:
const Footer = ({ anio }) => {
  return <h2>Año actual {anio}</h2>;
};

export default Footer;

/* 
Forma 2:

const Footer = () => {
  // Aca pongo el javascript que necesite.
  // Calcular el año corriente.

  const fecha = new Date().getFullYear();

  return <h2>Año actual {fecha}</h2>;
};

export default Footer; */
