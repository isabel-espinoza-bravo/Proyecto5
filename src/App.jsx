import React, { useState } from "react";
import BarraBusqueda from "./components/BarraBusqueda";
import ListaLugares from "./components/ListaLugares";
import "./style/App.css";

function App() {
  const [lugares, setLugares] = useState([]);

  return (
    <div className="app-container">
      <div className="container py-4">
        <h1 className="text-center mb-4">🌍 Buscador de Destinos</h1>
        <BarraBusqueda setLugares={setLugares} />
        <ListaLugares lugares={lugares} />
      </div>
    </div>
  );
}

export default App;

