import { useState } from "react";
import BarraBusqueda from "./components/BarraBusqueda";
import ListaLugares from "./components/ListaLugares";
import Mapa from "./components/Mapa";
import "./style/App.css";

function App() {
  const [lugares, setLugares] = useState([]); // Lugares encontrados
  const [selectedLugar, setSelectedLugar] = useState(null); // Lugar seleccionado para el mapa

  return (
    <div className="container">
      <h1 className="title">🌍 Buscador de Destinos</h1>

      {/* Barra de búsqueda */}
      <BarraBusqueda setLugares={setLugares} />

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        {/* Lista de lugares */}
        <div style={{ flex: 1 }}>
          <ListaLugares lugares={lugares} onSelectLugar={setSelectedLugar} />
        </div>

        {/* Mapa */}
        <div style={{ flex: 1 }}>
          <Mapa lugarSeleccionado={selectedLugar} />
        </div>
      </div>
    </div>
  );
}

export default App;
