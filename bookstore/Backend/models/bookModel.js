const pool = require("../config/db");

const getAllBooks = async () => {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
};

const addBook = async (title, author, quantity) => {
  const { rows } = await pool.query(
    "INSERT INTO books (title, author, quantity) VALUES ($1, $2, $3) RETURNING *",
    [title, author, quantity]
  );
  return rows[0];
};

const updateBook = async (id, title, author, quantity) => {
  const { rows } = await pool.query(
    "UPDATE books SET title = $1, author = $2, quantity = $3 WHERE id = $4 RETURNING *",
    [title, author, quantity, id]
  );
  return rows[0];
};

const deleteBook = async (id) => {
  const { rows } = await pool.query(
    "DELETE FROM books WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
};
