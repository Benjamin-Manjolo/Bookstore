import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api/books",
});

export const fetchBooks = () => API.get("/books");
export const createBook = (newBook) => API.post("/", newBook);
export const updateBook = (id, updatedBook) => API.put(`/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/${id}`);
