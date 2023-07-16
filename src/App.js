import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const editBookById = (id, newTitle) => {
    // function to update object
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
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9), title },
    ]; // ID and key set, doing title:title same as title
    // math.round to round up value from random number timed by 9 to generate id number
    setBooks(updatedBooks);
  }; // in argument shows what user puts in ,inside brackers

  return (
    <div className="app">
      <h1>Reading titles</h1>
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
