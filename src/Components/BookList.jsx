import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Book from "./Book";
import Search from "./Search";

function BookList() {
  const { category } = useParams();
  const books = useSelector((state) => state.books); // ⬅ get books from Redux

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    filterBooks();
  }, [books, category, searchText]);

  const filterBooks = () => {
    const filtered = books.filter((book) => {
      const matchesCategory = category
        ? book.category.toLowerCase() === category.toLowerCase()
        : true;
      const matchesSearch = book.name.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredBooks(filtered);
  };

  return (
    <div className="flex flex-col flex-wrap justify-center bg-black pt-8">
      <Search setSearchText={setSearchText} />
     <div className="flex flex-wrap justify-center">
        <h2 className="text-white font-medium text-3xl flex-none w-full pl-10 pt-5">Books: {category? category: "All"}</h2>
        {filteredBooks.length === 0 ? (
          <p className="mt-6 font-bold text-red-500 text-center min-h-[100dvh]">
            No books found.
          </p>
        ) : (
          filteredBooks.map((data) => <Book bookDetails={data} key={data.id} />)
        )}
      </div>
    </div>
  );
}

export default BookList;
