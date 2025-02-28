// api.js

// 📌 Get all books
export async function getBooks() {
  try {
    const response = await fetch("http://localhost:5000/books");
    if (!response.ok) throw new Error("Failed to fetch books");
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

// 📌 Add a new book
export async function addBook(name, author) {
  try {
    const response = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, author }),
    });
    if (!response.ok) throw new Error("Failed to add book");
    return await response.json();
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
}

// 📌 Delete a book
export async function deleteBook(id) {
  try {
    const response = await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete book");
    return await response.json();
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}

// 📌 Update a book
export async function updateBook(id, name, author) {
  try {
    const response = await fetch(`http://localhost:5000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, author }),
    });
    if (!response.ok) throw new Error("Failed to update book");
    return await response.json();
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
}

// 📌 Get all reserved books
export async function getReservedBooks() {
  try {
    const response = await fetch("http://localhost:5000/books/reserved");
    if (!response.ok) throw new Error("Failed to fetch reserved books");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reserved books:", error);
    throw error;
  }
}

// 📌 Reserve a book
export async function reserveBook(id) {
  try {
    const response = await fetch(`http://localhost:5000/books/${id}/reserve`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to reserve book");
    return await response.json();
  } catch (error) {
    console.error("Error reserving book:", error);
    throw error;
  }
}

// 📌 Unreserve a book
export async function unreserveBook(id) {
  try {
    const response = await fetch(`http://localhost:5000/books/${id}/unreserve`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to unreserve book");
    return await response.json();
  } catch (error) {
    console.error("Error unreserving book:", error);
    throw error;
  }
}
