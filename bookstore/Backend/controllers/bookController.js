const Book = require("../models/bookModel");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.addBook(
      req.body.title,
      req.body.author,
      req.body.quantity
    );
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Invalid book data" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, quantity } = req.body;
  try {
    const updatedBook = await Book.updateBook(id, title, author, quantity);
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: "Invalid book data" });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
