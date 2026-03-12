import React from "react";

export default function PeliculaItem({ movie, handleDetails }) {
  return (
    <li className="featured-books__item">
      <button
        onClick={() => handleDetails(movie)}
        className="featured-books__button"
      >
        <img src={movie.Poster} alt={movie.Title} />

        <h3>{movie.Title}</h3>

        <p>{movie.Year}</p>
      </button>
    </li>
  );
}
