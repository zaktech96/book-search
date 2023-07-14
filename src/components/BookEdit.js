import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  // book prop
  const [title, setTitle] = useState(book.title); //  inside bracket is whats default value
  // pass prop then added book.title inside useState to make it default
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title); // calls onsubmit, passes title state and id of book
    // onEdit(book.id, title); // edits book id and new title bit of state
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
