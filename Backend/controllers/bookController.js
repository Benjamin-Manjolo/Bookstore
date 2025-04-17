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
