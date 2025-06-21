import Book from "./Book";

function BookList(props) {
  return (
    <div className="flex flex-wrap justify-center bg-black pt-8">
      {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
    </div>
  );
}

export default BookList;
