import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

export default function AddBook() {
  const [form, setForm] = useState({
    name: "",
    author: "",
    description: "",
    rating: "",
    category: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, author, description, rating, category } = form;
    if (!name || !author || !description || !rating || !category) {
      setError("All fields are required");
      return;
    }
    const ratingNum = parseFloat(rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      setError("Rating must be a number between 0 and 5");
      return;
    }
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${category}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      {["name", "author", "description", "rating", "category"].map((field) => (
        <input
          key={field}
          type={field === "rating" ? "number" : "text"} // ✅ make rating a number input
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="block w-full border p-2"
        />
      ))}
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Add Book
      </button>
    </form>
  );
}
