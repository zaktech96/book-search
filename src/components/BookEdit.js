import { useState } from "react";
import useBooksContext from "../hooks/use-hooks";

function BookEdit({ book, onSubmit }) {
  // book prop
  const [title, setTitle] = useState(book.title); //  inside bracket is whats default value
  // pass prop then added book.title inside useState to make it default
  const { editBookById } = useBooksContext(); // goes into context to get book, using new file to get bookscontext, important to add () to map
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(); // calls onsubmit, passes title state and id of book
    // onEdit(book.id, title); // edits book id and new title bit of state
    //Bookshow doesnt require ID and title anymore
    // onsubmit closes form

    editBookById(book.id, title); // edits book using id of book and title
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">save</button>
    </form>
  );
}

export default BookEdit;
