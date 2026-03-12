import { useState } from "react";
import PeliculasList from "../Peliculas/List";

export default function Search({ movies }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchBy, setSearchBy] = useState("Title");

  function handleSubmit(event) {
    event.preventDefault();

    if (query.trim() === "") {
      alert("Por favor escribe algo para buscar");
      return;
    }

    const filtered = movies.filter((movie) =>
      movie[searchBy].toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }

  function handleSearchBy(category) {
    setSearchBy(category);
  }

  return (
    <div className="search">
      <h1 className="search__title">Buscar películas por:</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="imdbID"
            checked={searchBy === "imdbID"}
            onChange={(e) => handleSearchBy(e.target.value)}
          />
          ID
        </label>

        <label>
          <input
            type="radio"
            value="Year"
            checked={searchBy === "Year"}
            onChange={(e) => handleSearchBy(e.target.value)}
          />
          Año
        </label>

        <label>
          <input
            type="radio"
            value="Title"
            checked={searchBy === "Title"}
            onChange={(e) => handleSearchBy(e.target.value)}
          />
          Título
        </label>

        <br />

        <input
          type="text"
          className="search__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="search__button">
          Buscar
        </button>
      </form>

      {results.length >= 1 && (
        <PeliculasList movies={results} title="Películas encontradas" />
      )}
    </div>
  );
}
