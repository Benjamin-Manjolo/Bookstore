import React, { useState } from "react";

import { createBook } from "../services/books";

const AddBook = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    quantity: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = await createBook(formData);
    onBookAdded(newBook);
    setFormData({ title: "", author: "", quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Book title"
      />
      {/* Similar inputs for author/quantity */}
      <button type="submit">Add Book</button>
    </form>
  );
};
