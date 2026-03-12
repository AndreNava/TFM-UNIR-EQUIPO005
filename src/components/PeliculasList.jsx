import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PeliculasList({ movies, title }) {

  const [sortedMovies, setSortedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const sorted = [...movies].sort((a, b) =>
      a.Title.localeCompare(b.Title)
    );

    setSortedMovies(sorted);

  }, [movies]);

  function handleDetails(movie) {
    navigate(`/movie/${movie.imdbID}`);
  }

  return (

    <div className="featured-books">

      {sortedMovies.length >= 1 &&
        <h2 className="featured-books__title">{title}</h2>
      }

      <ul className="featured-books__list">

        {sortedMovies.map((movie) => (

          <li key={movie.imdbID} className="featured-books__item">

            <button
              onClick={() => handleDetails(movie)}
              className="featured-books__button"
            >

              <img src={movie.Poster} alt={movie.Title} />

              <h3>{movie.Title}</h3>

              <p>{movie.Year}</p>

            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}