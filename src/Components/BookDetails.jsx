import { useParams } from "react-router-dom";
import { books } from "../utils/mockdatta";

function BookDetails() {
  const params = useParams();
  const book = books.filter((book) => book.id == params.id);
  return (
    <>
      {book.map((book) => {
        return (
<div key={book.id} className=" min-h-[100dvh] bg-black flex flex-col items-center" >
     <div className="w-60 h-130 m-auto mt-8 rounded-xl bg-emerald-50 p-3 hover:scale-105 transform transition duration-75 shadow">
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
      </div>
     </div>
    
    </div>
        );
      })}
    </>
  );
}

export default BookDetails;
