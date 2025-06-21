import { useState } from "react";
import { books } from "../utils/mockdatta";

function Search({setFilteredBook}) {
  const [searchText, setSearchText] = useState("");
  

  function handleClick() {
    const filteredBooks = books.filter((book) =>book.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredBook(filteredBooks);
  }

  return (
    <div className="flex flex-col justify-center items-center h-36 space-y-2 bg-[#222222] text-white">
      <h2 className="font-bold text-2xl mb-4">Search</h2>
      <div className="flex flex-wrap space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 rounded w-64"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

