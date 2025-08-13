require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const prisma = new PrismaClient();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET;

// 📌 Get all books (including reservation status)
app.get("/books", async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// 📌 Add a new book
app.post("/books", async (req, res) => {
  try {
    const { name, author } = req.body;
    const newBook = await prisma.book.create({ 
      data: { 
        name, 
        author,
        reserved: false,
        userId: null
      } 
    });
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

// 📌 Reserve a book
app.post("/books/:id/reserve", authenticateToken, async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const userId = req.user.id;

    const updatedBook = await prisma.book.update({
      where: { id: bookId },
      data: { 
        reserved: true,
        userId: userId
      },
    });
    
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to reserve book" });
  }
});

// 📌 Unreserve a book
app.post("/books/:id/unreserve", authenticateToken, async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const userId = req.user.id;

    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (book.userId !== userId) {
      return res.status(403).json({ error: "You can only unreserve your own books" });
    }

    const updatedBook = await prisma.book.update({
      where: { id: bookId },
      data: { 
        reserved: false,
        userId: null
      },
    });
    
    res.json(updatedBook);
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

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ 
      message: "Login successful",
      username: user.username,
      token
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

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});