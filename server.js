const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const Book = require("./models/Book");

const app = express();
const PORT = 3001;


app.use(express.static(path.join(__dirname, "public")));


app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/bookDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));




app.post("/api/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});


app.put("/api/books/:id", async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


app.delete("/api/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book Deleted" });
});


app.get("/test", (req, res) => {
  res.send("Test route works!");
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
