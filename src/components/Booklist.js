// import { useContext } from "react"; // Imports context
// import BooksContext from "../context/books"; // imports bookscontext file
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-hooks";

function BookList() {
  // deleted props not needed
  const { books } = useBooksContext(); // makes use of context hook and reaches for books, bracket important to map through
  // destructuring array to receive prop
  // now calling function from use hooks file instead of showing here

  // const { count, incrementCount } = useContext(BooksContext); // destrutying array to access count and IncrementCount prop
  // count  is number,IncrementCount is function to call
  const CheckingBook = books.map((book) => {
    // maps over array
    return <BookShow key={book.id} book={book} />;
    // shows component, assigns id and key
    //taken out onedit
  });
  return <div className="book-list">{CheckingBook}</div>;
}

export default BookList;
