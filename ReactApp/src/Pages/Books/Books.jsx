import React, { useState, useEffect } from 'react';  // ✅ Import useEffect
import './Books.css';
import searchIcon from '../../assets/search.png';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import { getBooks, addBook, deleteBook, updateBook } from "../../api"; // Ensure API exists

const Books = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ name: "", author: "" });
  const [editBook, setEditBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddBook = async () => {
    if (!newBook.name || !newBook.author) return;
    try {
      await addBook(newBook);
      setNewBook({ name: "", author: "" });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    setEditBook(book);
  };

  const handleSaveEdit = async () => {
    if (!editBook.name || !editBook.author) return;
    try {
      await updateBook(editBook.id, editBook);
      setEditBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='books'>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search books..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>

      </div>

      
      <Title subTitle='Book Collection' Title='ADD BOOKS'/>

      <div className="book-form">
          <input
            type="text"
            placeholder="Book Name"
            value={editBook ? editBook.name : newBook.name}
            onChange={(e) =>
              editBook
                ? setEditBook({ ...editBook, name: e.target.value })
                : setNewBook({ ...newBook, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Author"
            value={editBook ? editBook.author : newBook.author}
            onChange={(e) =>
              editBook
                ? setEditBook({ ...editBook, author: e.target.value })
                : setNewBook({ ...newBook, author: e.target.value })
            }
          />
          {editBook ? (
            <button onClick={handleSaveEdit} className="edit-button">
              Save
            </button>
          ) : (
            <button onClick={handleAddBook} className="add-button">
              Add Book
            </button>
          )}
        </div>


      <div className="book-list">
        <Title subTitle="Book List" Title="Your Collection" />
        <ul>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li key={book.id} className="book-item">
                <span>{book.name} by {book.author}</span>
                <div className="buttons">
                  <button onClick={() => handleEdit(book)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(book.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No books found</p>
          )}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Books;
