import PeliculasList from "../Peliculas/List";

export default function Categorias({ movies }) {
  return (
    <div className="books">
      <h1 className="books__title">Categorias</h1>

      <PeliculasList
        movies={movies}
        title="Descubre nuestro catálogo de películas"
      />
    </div>
  );
}
