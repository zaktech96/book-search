import { useContext } from "react"; // Imports context
import BooksContext from "../context/books"; // imports bookscontext file
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // destructuring array to receive prop

  const value = useContext(BooksContext); // to show context in file
  const CheckingBook = books.map((book) => {
    // maps over array
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
    // shows component, assigns id and key
    //taken out onedit
  });
  return (
    <div className="book-list">
      {CheckingBook}
      {value} {/* shows context*/}
    </div>
  );
}

export default BookList;
