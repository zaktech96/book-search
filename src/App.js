import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    // used make request to fetch all books
    const response = await axios.get(" http://localhost:3001/books");
    setBooks(response.data); // updates data using state
  };

  useEffect(() => {
    // callback function to be executed after tcomponent renders
    fetchBooks(); // Call the fetchBooks() function to fetch books from an external source
  }, []); // The empty dependency array ensures the effect runs only once, after the initial component mount
  // function to update object
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      //
      // maps through each book
      if (book.id === id) {
        /// if books is equL to id then
        return { ...book, title: newTitle }; // return rest of book and new title
      }
      return book; // if doesnt equal to book or title then just returns book
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      // filter creates new array
      return book.id !== id; // logical operator to return value if true
    });
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [
      ...books, // takes all books and adds to arry
      response.data, // to the end add response of data
    ];

    setBooks(updatedBooks);
    // in argument shows what user puts in ,inside brackers
  };
  return (
    <div className="app">
      <h1>Reading titles</h1>
      <BookList
        onEdit={editBookById}
        books={books}
        onDelete={deleteBookById}
      />{" "}
      {/* onDelete prop to delete items and be passed to booklist*/}
      {/* shows component then adds prop, which communicates down to bookList*/}
      <BookCreate OnCreate={createBook} />
    </div>
  );
}

export default App;
