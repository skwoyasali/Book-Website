function Book(props) {
  return (
    <div className="w-60 h-auto m-3 mb-10 rounded-xl bg-emerald-50 p-3 hover:scale-105 transform transition duration-75 shadow">
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
        <p className="p-1 font-medium">{props.bookDetails.description}</p>
      </div>
    </div>
  );
}

export default Book;
