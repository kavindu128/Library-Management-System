import React, { useState, useEffect } from "react";
import "./Reservation.css";
import { getBooks, getReservedBooks, reserveBook, unreserveBook } from "../api";
import searchIcon from "../assets/search.png";
import Title from "../Components/Title/Title";

const Reservation = () => {
  const [books, setBooks] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const booksData = await getBooks();
      const reservedData = await getReservedBooks();
      setBooks(booksData);
      setReservedBooks(reservedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReserve = async (bookId) => {
    try {
      await reserveBook(bookId);
      fetchData();
    } catch (error) {
      console.error("Error reserving book:", error);
    }
  };

  const handleUnreserve = async (bookId) => {
    try {
      await unreserveBook(bookId);
      fetchData();
    } catch (error) {
      console.error("Error unreserving book:", error);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="reservation">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
      <div className="container">
        <Title subTitle="Book Collection" Title="AVAILABLE BOOKS" />
        <div className="cards-container">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="book-card" key={book.id}>
                <h3>{book.name}</h3>
                <p>by {book.author}</p>
                <button onClick={() => handleReserve(book.id)}>Reserve</button>
              </div>
            ))
          ) : (
            <p>No books found</p>
          )}
        </div>

        <Title subTitle="Book Collection" Title="RESERVED BOOKS" />
        <div className="cards-container">
          {reservedBooks.length > 0 ? (
            reservedBooks.map((book) => (
              <div className="book-card" key={book.id}>
                <h3>{book.name}</h3>
                <p>by {book.author}</p>
                <button onClick={() => handleUnreserve(book.id)}>
                  Unreserve
                </button>
              </div>
            ))
          ) : (
            <p>No reserved books</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;