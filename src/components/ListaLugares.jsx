function ListaLugares({ lugares, onSelectLugar }) {
  return (
    <div className="places-list">
      {lugares.length === 0 ? (
        <p>No hay resultados. Busca una ciudad o dirección.</p>
      ) : (
        lugares.map((lugar) => {
          const props = lugar.properties;
          return (
            <div
              key={lugar.properties.place_id}
              className="place-card"
              onClick={() => onSelectLugar(lugar)}
            >
              <h3>{props.formatted}</h3>
              <p>
                {props.city || props.town || props.village || "Ciudad no especificada"}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ListaLugares;

