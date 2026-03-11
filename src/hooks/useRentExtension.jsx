import { useState } from "react";

export function useRentExtension(setRentedBooks) {
  const [addTimeIsClicked, setAddTimeIsClicked] = useState(false);
  const [bookClickAddTime, setBookClickAddTime] = useState({});
  const [daysAdd, setDaysAdd] = useState("5");
  const [successfulAdd, setSuccessfulAdd] = useState(false);

  function handleProrrogaBtn(book) {
    setAddTimeIsClicked(true);
    setBookClickAddTime(book);
  }

  function handleCancelarBtn() {
    setAddTimeIsClicked(false);
    setBookClickAddTime({});
  }

  function handleAceptarBtn(book, addDays) {
    const days = parseInt(addDays, 10);
    let newReturnedDate = new Date(book.returnedDate);
    newReturnedDate.setDate(newReturnedDate.getDate() + days);

    setRentedBooks((prevRentedBooks) =>
      prevRentedBooks.map((bookItem) =>
        bookItem.book.ISBN === book.book.ISBN
          ? {
              ...bookItem,
              daysOfRent: bookItem.daysOfRent + days,
              returnedDate: newReturnedDate,
              price: bookItem.price + days * bookItem.book.rentPriceDay,
            }
          : bookItem
      )
    );

    setSuccessfulAdd(true);
    setAddTimeIsClicked(false);
  }

  function handleDaysOfRents(event) {
    setDaysAdd(event.target.value);
  }

  return {
    addTimeIsClicked,
    bookClickAddTime,
    daysAdd,
    successfulAdd,
    handleProrrogaBtn,
    handleCancelarBtn,
    handleAceptarBtn,
    handleDaysOfRents,
  };
}
