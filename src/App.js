import { useEffect, useContext } from "react"; // to reach context, import Usecontext
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books"; // this will allow to reach  context

function App() {
  const { fetchBooks } = useContext(BooksContext); // this allows to reach up to context provider to pull back fetchBooks

  useEffect(() => {
    // callback function to be executed after component renders
    fetchBooks(); // Call the fetchBooks() function to fetch books from an external source
  }, []); // The empty dependency array ensures the effect runs only once, after the initial component mount
  //empty array saying call after first render then never again
  // function to update object

  return (
    <div className="app">
      <h1>Reading book</h1>
      <BookList />
      {/* onDelete prop to delete items and be passed to booklist*/}
      {/* shows component then adds prop, which communicates down to bookList*/}
      <BookCreate />
    </div>
  );
}

export default App;
