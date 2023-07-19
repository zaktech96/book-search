import { createContext, useState } from "react"; // imports context
import axios from "axios";

const BooksContext = createContext(); // use function to create context object

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    // used make request to fetch all books
    const response = await axios.get(" http://localhost:3001/books");
    setBooks(response.data); // updates data using state
  };

  const editBookById = async (id, newTitle) => {
    // async code for making request with await
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      // to add id, usimg template literal
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      // maps through each book
      if (book.id === id) {
        /// if books is equL to id then
        return { ...book, ...response.data }; // instead of updating using title, using response.data takes properites of object with key data and add to new object
      }
      return book; // if doesnt equal to book or title then just returns book
    });
    setBooks(updatedBooks);
  }; // missed bracket which caused error, this defined function for delete,edit and update inside fetchBooks

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`); // delete request to send to server to delete book
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
  //
  // creates state, call back function to change state
  // const [count, setCount] = useState(5);
  // const valueToShare = {
  //   // object to share with rest of App
  //   count, // key and value the same, can reduce to just count
  //   incrementCount: () => {
  //     // function to change count
  //     setCount(count + 1); // increases value by one
  //   },
  // };

  const valueToShare = {
    books, // shows values to share, as key is same as title, just  one is fine
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {/*// context provider will be shared with rest of App */}
      {children}
    </BooksContext.Provider>
  );
}

export { Provider }; // this exports provider
export default BooksContext;
// to import provider will do BookContext, {Provider}
