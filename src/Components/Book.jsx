import { Link } from "react-router-dom";

function Book(props) {
  return (
    <div className="w-60 h-130 m-3 my-10 flex flex-col justify-between items-center rounded-xl bg-emerald-50 p-3 hover:scale-105 transform transition duration-75 shadow">
      <img
        src={props.bookDetails.imageUrl}
        alt=""
        width="200px"
        height="200px"
        className="rounded-xl"
      />
      <div>
        <h2 className="p-2 font-extrabold">{props.bookDetails.name}</h2>
        <p className="p-1">{props.bookDetails.author}</p>
      </div>
      <Link to={`/book/${props.bookDetails.id}`}><button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 mb-5 rounded hover:bg-blue-600 cursor-pointer">View Details</button></Link>
      
    </div>
  );
}

export default Book;
