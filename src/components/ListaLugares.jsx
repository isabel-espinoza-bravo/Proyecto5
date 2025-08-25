import React from "react";

function ListaLugares({ lugares }) {
  if (!lugares.length) {
    return <p className="text-center">🔍 Escribe algo para ver resultados.</p>;
  }

  return (
    <div className="row">
      {lugares.map((lugar) => (
        <div className="col-md-4 mb-4" key={lugar.properties.place_id}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">
                {lugar.properties.formatted || "📍 Lugar sin nombre"}
              </h5>
              <p className="card-text">
                <strong>Latitud:</strong> {lugar.geometry.coordinates[1]} <br />
                <strong>Longitud:</strong> {lugar.geometry.coordinates[0]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaLugares;
