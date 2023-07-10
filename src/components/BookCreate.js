import { useState } from "react"; // state to update input for title

function BookCreate({ OnCreate }) {
  const [input, SetInput] = useState("");

  const handleChange = (event) => {
    // inside ()to track when user change
    SetInput(event.target.value); // to wire up input, need to add event, showing whats typed in
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    OnCreate(input);
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
        <button className="button"> Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
