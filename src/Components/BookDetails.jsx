import { useParams } from "react-router-dom";
import { books } from "../utils/mockdatta";
import { Link } from "react-router-dom";

function BookDetails() {
  const params = useParams();
  const book = books.filter((book) => book.id == params.id);
  return (
    <>
      {book.map((book) => {
        return (
          <div
            key={book.id}
            className=" min-h-[100dvh] bg-black flex flex-col items-center">
            <Link to="/browsebook">
              <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 m-3 rounded hover:bg-blue-600 cursor-pointer">
                Back to Browse
              </button>
            </Link>
            <div>
              <div className="w-60 h-135 m-auto mt-2 rounded-xl flex flex-col justify-between  bg-emerald-50 p-3 hover:scale-105 transform transition duration-75 shadow">
                <img
                  src={book.imageUrl}
                  alt=""
                  width="200px"
                  height="200px"
                  className="rounded-xl"
                />
                <div>
                  <h2 className="p-2 font-extrabold">{book.name}</h2>
                  <p className="p-1">{book.author}</p>
                  <p className="p-1 font-medium">{book.description}</p>
                  <span className="p-0.5 font-medium bg-green-300 rounded">
                    {book.rating}⭐
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BookDetails;
