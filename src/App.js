import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]); // empty array to make use of book create to add to array
  const createBook = (title) => {
    console.log("add book:", title);
  }; // in argument shows what user puts in ,inside brackers

  return (
    <div>
      <BookCreate OnCreate={createBook} />
    </div>
  );
}

export default App;
