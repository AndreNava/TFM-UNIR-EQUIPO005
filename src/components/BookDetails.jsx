import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

export default function BookDetails({ rentedBooks, setRentedBooks, books }) {
  const { isbn } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [rentIsClicked, setRentIsClicked] = useState(false);
  const [daysOfRent, setDaysOfRent] = useState("5");
  const [successfulRented, setSuccessfulRented] = useState(false);

  useEffect(() => {
    // Busca el libro en la lista usando el ISBN
    const fetchedBook = books.find((item) => item.ISBN === isbn);
    if (fetchedBook) {
      setBook(fetchedBook);
    } else {
      console.error(`No se encontró un libro con ISBN: ${isbn}`);
    }
  }, [isbn, books]);

  function handleRentedBook() {
    const days = parseInt(daysOfRent, 10);
    const rentedDate = new Date();
    const returnedDate = new Date();
    returnedDate.setDate(rentedDate.getDate() + days);

    setRentedBooks((prevRentedBooks) => [
      ...prevRentedBooks,
      {
        rentedDate,
        price: book.rentPriceDay * days,
        daysOfRent: days,
        returnedDate,
        book,
      },
    ]);

    setSuccessfulRented(true);
    setRentIsClicked(false);
  }

  function handleDaysOfRents(event) {
    setDaysOfRent(event.target.value);
  }

  function handleReturn() {
    navigate(-1);
  }

  if (!book) return <NotFound />;

  return (
    <div className="featured-books__detail">
      <div className="featured-books__detail-header">
        <button className="featured-books__detail-btn" onClick={handleReturn}>
          Regresar
        </button>
      </div>
      <h1 className="featured-books__detail-title">{book.title}</h1>
      <h2 className="featured-books__detail-author">Autor: {book.author}</h2>
      <p className="featured-books__detail-year">
        Año de publicación: {book.year}
      </p>
      <div className="featured-books__detail-image">
        <img src={book.image.src} alt={book.title} />
      </div>
      <p className="featured-books__detail-description">{book.description}</p>
      {successfulRented && (
        <p>
          <b>
            Libro alquilado exitosamente, puedes ver tus libros alquilados en el
            menú "Alquilados"
          </b>
        </p>
      )}
      {!rentIsClicked &&
        rentedBooks.some((rented) => rented.book.ISBN === book.ISBN) && (
          <p>
            Ya tienes alquilado este libro actualmente. <br /> No puedes rentar
            el mismo libro 2 veces.
          </p>
        )}
      {!rentIsClicked &&
        !rentedBooks.some((rented) => rented.book.ISBN === book.ISBN) && (
          <button
            className="featured-books__detail-btn"
            onClick={() => setRentIsClicked(true)}
          >
            Rentar
          </button>
        )}
      {rentIsClicked && (
        <div>
          <form>
            <p>
              <b> Deseas rentar por cuantos días naturales: </b>
            </p>
            <label>
              <input
                type="radio"
                name="opciones"
                value={5}
                checked={daysOfRent === "5"}
                onChange={handleDaysOfRents}
              />
              5 días{" "}
            </label>
            <label>
              <input
                type="radio"
                name="opciones"
                value={10}
                checked={daysOfRent === "10"}
                onChange={handleDaysOfRents}
              />
              10 días{" "}
            </label>
            <label>
              <input
                type="radio"
                name="opciones"
                value={15}
                checked={daysOfRent === "15"}
                onChange={handleDaysOfRents}
              />
              15 días{" "}
            </label>
            <p>
              El precio por día de este ejemplar es de{" "}
              <b>${book.rentPriceDay}</b>
            </p>
            <p>
              El precio de la renta es de:{" "}
              <b>${book.rentPriceDay * daysOfRent}</b>
            </p>
          </form>
          <button
            className="featured-books__detail-btn"
            onClick={() => setRentIsClicked(false)}
          >
            Cancelar
          </button>
          <button
            className="featured-books__detail-btn"
            onClick={handleRentedBook}
          >
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
}
