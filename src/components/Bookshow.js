import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-hooks";

function BookShow({ book }) {
  const [edit, showEdit] = useState(false);
  const { deleteBookById } = useBooksContext(); // typo error caused issue, using use hook file to get bookcontext

  const handleDeleteClick = () => {
    deleteBookById(book.id); // pass new function which reaches to context to get function
  };

  const handleEditClick = () => {
    showEdit(!edit); //   / !Showedit = not edit for when editing to return boolean value
  };

  const handleSubmit = () => {
    // recieves id and title to communicate it back up
    showEdit(false); // made mistake with naming state incorrectly
    // onEdit(id, newTitle); // recieves title and id and passes it back up
    // will rely on book edit component id which is EditBookById which calles editId
  };

  let content = <h3>{book.title}</h3>; // let to change variable overtime
  if (edit) {
    // passed second value as state, had to be first one
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
    // if true will book edit component
    // now passing down book as prop to BookEdit
    // when showing book edit, still need to pass down on submit function
    // as bookShow component requries to understand when it should set when shown
  } // so still need to pass down handle submit as prop
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt=""
        srcset=""
      />
      <div> {content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
