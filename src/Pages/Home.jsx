import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../Components/Book";

function Home() {
  const books = useSelector((state) => state.books);
  const categories = [...new Set(books.map((book) => book.category))];
  const popularBooks = books.slice(0, 3);

  return (
    <>
    <div className="flex flex-col items-center min-h-[100dvh] p-20 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Online Library</h1>
      <h2 className="text-xl font-semibold">Categories:</h2>
      <ul className="list-disc ml-6 mb-6">
        {categories.map((cat) => (
          <Link to={`/books/${cat}`} key={cat}>
            {" "}
            <li
              
              className="px-3 m-2 py-1 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 cursor-pointer transition"
            >
              {cat}
            </li>
          </Link>
        ))}
      </ul>
       <h2 className="text-xl font-semibold">Popular Books:</h2>
      <div className="flex flex-col md:flex-row text-black" >
        {popularBooks.map((book) => (
          <Book bookDetails={book} key={book.id} />
        ))}
      </div>
</div>
 </>
  );
}

export default Home;
