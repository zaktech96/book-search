import { useContext } from "react"; // Imports context
import BooksContext from "../context/books"; // imports bookscontext file
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // destructuring array to receive prop

  const { count, incrementCount } = useContext(BooksContext); // destrutying array to access count and IncrementCount prop
  // count  is number,IncrementCount is function to call
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
      <button onClick={incrementCount}>Click Button</button>
      {count}
    </div>
  );
}

export default BookList;
