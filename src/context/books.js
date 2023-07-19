import { createContext, useState } from "react"; // imports context

const BooksContext = createContext(); // use function to create context object

function Provider({ children }) {
  // creates state, call back function to change state
  const [count, setCount] = useState(5);
  const valueToShare = {
    // object to share with rest of App
    count, // key and value the same, can reduce to just count
    incrementCount: () => {
      // function to change count
      setCount(count + 1); // increases value by one
    },
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
