import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let map;
let marker;

function Mapa({ lugarSeleccionado }) {
  useEffect(() => {
    if (!map) {
      map = L.map("map").setView([0, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
    }
  }, []);

  useEffect(() => {
    if (lugarSeleccionado && map) {
      const { lat, lon } = lugarSeleccionado.properties;

      map.setView([lat, lon], 13);

      // 🔥 Borrar marcador anterior
      if (marker) {
        map.removeLayer(marker);
      }

      // 🔥 Crear nuevo marcador
      marker = L.marker([lat, lon]).addTo(map);
    }
  }, [lugarSeleccionado]);

  return <div id="map" className="map-container"></div>;
}

export default Mapa;






