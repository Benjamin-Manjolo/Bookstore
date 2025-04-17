import React, { useState, useEffect } from "react";
import { fetchBooks, deleteBook } from "../services/books";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    loadBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Book Inventory</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
