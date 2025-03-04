const API_BASE_URL = "http://localhost:5000";

// Helper function to handle responses
async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Request failed");
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

// 📌 Get all books (both reserved and unreserved)
export async function getBooks() {
  try {
    const [books, reservedBooks] = await Promise.all([
      fetch(`${API_BASE_URL}/books`).then(handleResponse),
      fetch(`${API_BASE_URL}/books/reserved`).then(handleResponse),
    ]);
    return [...books, ...reservedBooks];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

// 📌 Add a new book
export async function addBook(name, author) {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, author }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
}

// 📌 Delete a book
export async function deleteBook(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}

// 📌 Update a book
export async function updateBook(id, name, author) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, author }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
}

// 📌 Get all reserved books
export async function getReservedBooks() {
  try {
    const response = await fetch(`${API_BASE_URL}/books/reserved`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching reserved books:", error);
    throw error;
  }
}

// 📌 Reserve a book
export async function reserveBook(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}/reserve`, {
      method: "POST",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error reserving book:", error);
    throw error;
  }
}

// 📌 Unreserve a book
export async function unreserveBook(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}/unreserve`, {
      method: "POST",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error unreserving book:", error);
    throw error;
  }
}