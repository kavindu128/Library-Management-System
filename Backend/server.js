const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 📌 GET all books
app.get("/books", async (req, res) => {
  const books = await prisma.book.findMany({
    select: { id: true, name: true, author: true },
  });
  res.json(books);
});

// 📌 GET a book by ID
app.get("/books/:id", async (req, res) => {
  const book = await prisma.book.findUnique({
    where: { id: parseInt(req.params.id) },
    select: { id: true, name: true, author: true },
  });
  res.json(book);
});

// 📌 CREATE a new book
app.post("/books", async (req, res) => {
  const { name, author } = req.body;
  const newBook = await prisma.book.create({
    data: { name, author },
    select: { id: true, name: true, author: true },
  });
  res.json(newBook);
});

// 📌 UPDATE a book
app.put("/books/:id", async (req, res) => {
  const { name, author } = req.body;
  const updatedBook = await prisma.book.update({
    where: { id: parseInt(req.params.id) },
    data: { name, author },
    select: { id: true, name: true, author: true },
  });
  res.json(updatedBook);
});

// 📌 DELETE a book
app.delete("/books/:id", async (req, res) => {
  await prisma.book.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ message: "Book deleted successfully" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
