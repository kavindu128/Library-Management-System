const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
const JWT_SECRET = "your_jwt_secret_key"; // Replace with a strong secret key

// 📌 Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await prisma.book.findMany(); // Fetch all books
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
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


// 📌 User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // Simple password comparison (remove bcrypt if you don't want hashing)
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Return username for display
    res.json({ 
      message: "Login successful",
      username: user.username
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// 📌 Protected Route Example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
}

// Update register endpoint:
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Remove password hashing
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: password, // Store plain text password
      },
    });

    res.status(201).json({ 
      message: "User registered successfully", 
      user: newUser 
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});