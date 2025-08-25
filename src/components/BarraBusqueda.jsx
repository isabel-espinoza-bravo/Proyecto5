import { useState } from "react";

function BarraBusqueda({ setLugares }) {
  const [query, setQuery] = useState("");

  const buscarLugares = async () => {
    if (!query) return;
    const apiKey = "a1425fbf2d3f49128ff7df295f4122ec"; // 🔑 PON AQUÍ TU API KEY

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      query
    )}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLugares(data.features || []);
    } catch (error) {
      console.error("Error buscando lugares:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar ciudad o dirección..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && buscarLugares()}
      />
      <button onClick={buscarLugares}>Buscar</button>
    </div>
  );
}

export default BarraBusqueda;


