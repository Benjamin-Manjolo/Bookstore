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
