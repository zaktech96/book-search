import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete }) {
  const [Edit, ShowEdit] = useState(false);

  const handleEditClick = () => {
    ShowEdit(!Edit); //   / !Showedit = not edit for when editing to return boolean value
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>; // let to change variable overtime
  if (Edit) {
    content = <BookEdit />;
    // if true will book edit component
  }
  return (
    <div className="book-show">
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
