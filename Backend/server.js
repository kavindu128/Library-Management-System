const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 📌 Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// 📌 Add a new book
app.post("/books", async (req, res) => {
  try {
    const { name, author } = req.body;
    const newBook = await prisma.book.create({ data: { name, author } });
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// 📌 Delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    await prisma.book.delete({ where: { id: bookId } });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
});

// 📌 Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const { name, author } = req.body;
    const updatedBook = await prisma.book.update({
      where: { id: bookId },
      data: { name, author },
    });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
});

// 📌 Get all reserved books
app.get("/books/reserved", async (req, res) => {
  try {
    const reservedBooks = await prisma.reservedBook.findMany();
    res.json(reservedBooks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reserved books" });
  }
});

// 📌 Reserve a book
app.post("/books/:id/reserve", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) return res.status(404).json({ error: "Book not found" });

    const reservedBook = await prisma.reservedBook.create({
      data: { name: book.name, author: book.author },
    });

    await prisma.book.delete({ where: { id: bookId } });

    res.json(reservedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to reserve book" });
  }
});

// 📌 Unreserve a book
app.post("/books/:id/unreserve", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);

    // Find the reserved book
    const reservedBook = await prisma.reservedBook.findUnique({
      where: { id: bookId },
    });

    if (!reservedBook) {
      return res.status(404).json({ error: "Reserved book not found" });
    }

    // Add the book back to the main book collection
    const book = await prisma.book.create({
      data: { name: reservedBook.name, author: reservedBook.author },
    });

    // Remove it from reserved collection
    await prisma.reservedBook.delete({ where: { id: bookId } });

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to unreserve book" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
