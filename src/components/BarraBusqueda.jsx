import React, { useState } from "react";
import axios from "axios";

// 🔑 Coloca tu API Key de Geoapify aquí
const API_KEY = "a1425fbf2d3f49128ff7df295f4122ec";

function BarraBusqueda({ setLugares }) {
  const [busqueda, setBusqueda] = useState("");

  // 🔍 Función para manejar la búsqueda
  const manejarBusqueda = async (e) => {
    e.preventDefault();
    if (!busqueda.trim()) return;

    try {
      const respuesta = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          busqueda
        )}&apiKey=${API_KEY}`
      );
      setLugares(respuesta.data.features);
    } catch (error) {
      console.error(error);
      alert("⚠️ Ocurrió un error al buscar lugares. Inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={manejarBusqueda} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe una ciudad, restaurante, etc..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default BarraBusqueda;


