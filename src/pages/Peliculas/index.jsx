import PeliculasList from "./List.jsx";

export default function Peliculas({ movies }) {
  return (
    <div className="books">
      <h1 className="books__title">Películas</h1>

      <PeliculasList
        movies={movies}
        title="Descubre nuestro catálogo de películas"
      />
    </div>
  );
}
