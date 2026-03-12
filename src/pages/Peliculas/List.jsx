import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PeliculaItem from "../../components/PeliculaItem";

export default function PeliculasList({ movies, title }) {
  const [sortedMovies, setSortedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const sorted = [...movies].sort((a, b) => a.Title.localeCompare(b.Title));

    setSortedMovies(sorted);
  }, [movies]);

  function handleDetails(movie) {
    navigate(`/movie/${movie.imdbID}`);
  }

  return (
    <div className="featured-books">
      {sortedMovies.length >= 1 && (
        <h2 className="featured-books__title">{title}</h2>
      )}

      <ul className="featured-books__list">
        {sortedMovies.map((movie) => (
          <PeliculaItem
            key={movie.imdbID}
            movie={movie}
            handleDetails={handleDetails}
          />
        ))}
      </ul>
    </div>
  );
}
