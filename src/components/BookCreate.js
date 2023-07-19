import { useState } from "react";
import useBooksContext from "../hooks/use-hooks";
// error made from importing Bookscontext

function BookCreate() {
  const [input, SetInput] = useState("");
  const { createBook } = useBooksContext(); // gives access of createBook from context
  // using use hook file to call function

  const handleChange = (event) => {
    // inside ()to track when user change
    SetInput(event.target.value); // to wire up input, need to add event, showing whats typed in
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(input); // call createBOOK function from context
    SetInput(""); // makes empty input
  };
  return (
    <div className="book-create">
      <h3> Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label> Title</label>
        <input className="input" value={input} onChange={handleChange} />{" "}
        {/* connecting input with event*/}
        <button className="button"> Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
