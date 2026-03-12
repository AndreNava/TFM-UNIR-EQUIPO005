import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

export default function PeliculasDetails({ movies }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchedMovie = movies.find((item) => item.imdbID === id);

    if (fetchedMovie) {
      setMovie(fetchedMovie);
    }

  }, [id, movies]);

  function handleReturn() {
    navigate(-1);
  }

  if (!movie) return <NotFound />;

  return (

    <div className="featured-books__detail">

      <div className="featured-books__detail-header">

        <button
          className="featured-books__detail-btn"
          onClick={handleReturn}
        >
          Regresar
        </button>

      </div>

      <h1 className="featured-books__detail-title">
        {movie.Title}
      </h1>

      <p className="featured-books__detail-year">
        Año: {movie.Year}
      </p>

      <div className="featured-books__detail-image">
        <img src={movie.Poster} alt={movie.Title} />
      </div>

      <p>Reseña: Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum
      </p>

    </div>
  );
}