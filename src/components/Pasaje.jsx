import React from "react";

const Pasaje = ({ pasaje }) => {
  return (
    <h3>
      {pasaje.id} {pasaje.articulo} {pasaje.precio}
    </h3>
  );
};

export default Pasaje;
