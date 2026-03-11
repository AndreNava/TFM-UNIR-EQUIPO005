import { useRentExtension } from "../hooks/useRentExtension.jsx";

export default function Rentals({ rentedBooks, setRentedBooks }) {
  const {
    addTimeIsClicked,
    bookClickAddTime,
    daysAdd,
    successfulAdd,
    handleProrrogaBtn,
    handleCancelarBtn,
    handleAceptarBtn,
    handleDaysOfRents,
  } = useRentExtension(setRentedBooks);

  return (
    <>
      {rentedBooks.length === 0 ? (
        <div className="rentals">
          <h1 className="rentals__title">
            No tienes libros alquilados actualmente
          </h1>
        </div>
      ) : (
        <div className="rentals">
          <h1 className="rentals__title">Tus libros alquilados</h1>
          <div className="rentals-books">
            <ul className="rentals-books__list">
              {rentedBooks.map((item) => (
                <li key={item.book.ISBN} className="rentals-books__item">
                  <img src={item.book.image.src} alt={item.book.image.alt} />
                  <h3>{item.book.title}</h3>
                  <p>
                    Autor: {item.book.author} <br />
                    Fecha de renta: {item.rentedDate.toLocaleDateString()}
                    <br />
                    Días rentados: {item.daysOfRent}
                    <br />
                    Fecha de devolución:{" "}
                    <b>{item.returnedDate.toLocaleDateString()}</b>
                    <br />
                  </p>
                  {item.daysOfRent >= 30 && (
                    <div>
                      <b>Tienes el plazo máximo de días rentados</b>
                      <br />
                    </div>
                  )}
                  {!addTimeIsClicked && item.daysOfRent < 30 && (
                    <button
                      className="featured-books__detail-btn"
                      onClick={() => handleProrrogaBtn(item.book)}
                    >
                      Prorroga
                    </button>
                  )}
                  {successfulAdd &&
                    bookClickAddTime.ISBN === item.book.ISBN && (
                      <p>
                        <b>Plazo extendido exitosamente</b>
                      </p>
                    )}
                  {addTimeIsClicked &&
                    bookClickAddTime.ISBN === item.book.ISBN && (
                      <div>
                        <form>
                          <p>
                            <b> Deseas extender el plazo por cuantos días: </b>
                          </p>
                          <label>
                            <input
                              type="radio"
                              name="opciones"
                              value={5}
                              checked={daysAdd === "5"}
                              onChange={handleDaysOfRents}
                            />
                            5 días{"   "}
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="opciones"
                              value={10}
                              checked={daysAdd === "10"}
                              onChange={handleDaysOfRents}
                            />
                            10 días{"   "}
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="opciones"
                              value={15}
                              checked={daysAdd === "15"}
                              onChange={handleDaysOfRents}
                            />
                            15 días{"   "}
                          </label>
                          <p>
                            El precio por día de este ejemplar es de{" "}
                            <b>${item.book.rentPriceDay}</b>
                          </p>
                          <p>
                            El precio del plazo extendido es de:{" "}
                            <b>${item.book.rentPriceDay * daysAdd}</b>
                          </p>
                        </form>
                        <button
                          className="featured-books__detail-btn"
                          onClick={handleCancelarBtn}
                        >
                          Cancelar
                        </button>
                        <button
                          className="featured-books__detail-btn"
                          onClick={() => handleAceptarBtn(item, daysAdd)}
                        >
                          Aceptar
                        </button>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
