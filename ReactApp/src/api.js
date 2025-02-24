import axios from "axios";

const API_URL = "http://localhost:5000/books";

// 📌 Fetch all books
export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 📌 Add a new book
export const addBook = async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

// 📌 Delete a book
export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// 📌 Update a book
export const updateBook = async (id, book) => {
  await axios.put(`${API_URL}/${id}`, book);
};
