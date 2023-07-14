import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // destructuring array to receive prop
  const CheckingBook = books.map((book) => {
    // maps over array
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
    // shows component, assigns id and key
    //taken out onedit
  });
  return <div className="book-list">{CheckingBook}</div>;
}

export default BookList;
