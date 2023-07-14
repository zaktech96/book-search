import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [edit, showEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    showEdit(!edit); //   / !Showedit = not edit for when editing to return boolean value
  };

  const handleSubmit = (id, newTitle) => {
    // recieves id and title to communicate it back up
    showEdit(false); // made mistake with naming state incorrectly
    onEdit(id, newTitle); // recieves title and id and passes it back up
  };

  let content = <h3>{book.title}</h3>; // let to change variable overtime
  if (edit) {
    // passed second value as state, had to be first one
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
    // if true will book edit component
    // now passing down book as prop to BookEdit
  }
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
