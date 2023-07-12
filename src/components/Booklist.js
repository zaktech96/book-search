import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  // destructuring array to receive prop
  const CheckingBook = books.map((book) => {
    // maps over array
    return <BookShow onDelete={onDelete} key={book.id} book={book} />;
    // shows component, assigns id and key
  });
  return <div className="book-list">{CheckingBook}</div>;
}

export default BookList;
