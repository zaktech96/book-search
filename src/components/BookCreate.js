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
    <div>
      <form onSubmit={handleSubmit}>
        <label> Title</label>
        <input value={input} onChange={handleChange} />{" "}
        {/* connecting input with event*/}
        <button> Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
