import { useState } from "react";
import Book from "./Book";
import { books } from "../utils/mockdatta";
import Search from "./Search";
import { Link } from "react-router-dom";
function BookList() {
  const [filteredbook, setFilteredBook] = useState(books);

  return (
    <div className="flex flex-col flex-wrap justify-center bg-black pt-8">
      <Search setFilteredBook={setFilteredBook} />
      <div className="flex flex-wrap justify-center">
        {filteredbook.map((data) => (
          <Link to={`/Book-Website/book/${data.id}`} key={data.id} >
            <Book bookDetails={data} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookList;
