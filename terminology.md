1. Definition: useEffect is a function imported from React that allows you to run code when a component is first rendered and on occasions when it is re-rendered.

2. Syntax:

   ```js
   useEffect(() => {
     // Code to be executed
   }, [dependencies]);
   ```

3. Execution: running code

   - When the arrow function inside useEffect is called: The arrow function is automatically called by React after the component is rendered.
     =>
   - Return value of the arrow function: The arrow function can optionally return a cleanup function that will be executed when the component is unmounted or before the next render. This cleanup function is useful for canceling subscriptions or clearing up any resources created by the effect.

   - Stale variable reference: If the arrow function references any variables from the surrounding scope (such as props or state), it creates a closure that captures those variables. However, the captured variables may become "stale" if they change in subsequent renders. To ensure the arrow function always has access to the latest values, include the dependencies as the second argument of useEffect.

4. Usage examples:

   - Fetching data once after the initial render:

     ```js
     useEffect(() => {
       fetchBooks();
     }, []);
     ```

     The empty dependency array `[]` ensures that the effect runs only once, after the initial component mount.

   - Fetching data on specific dependency change:

     ```js
     useEffect(() => {
       fetchBooks();
     }, [counter]);
     ```

     The effect will be called after a re-render if the `counter` variable (could be a prop or state) has changed.

   - Running the effect after every render:
     ```js
     useEffect(() => {
       fetchBooks();
     });
     ```
     When the second argument is omitted or not provided, the effect will run after every render.

These notes provide an overview of the useEffect function, its usage, and the considerations for using it effectively in React components.

Certainly! I will add comments next to the code snippets to provide explanatory notations. Here's the updated version of the notes with the added comments:

### Context

Context system is used to share data through components even if they don't have a direct link. It allows for sharing any type of data, such as numbers, strings, or objects, even if they have more complex information within them. Context can be utilized to provide specific information, like a list of books or an array of books, to components. However, it's important to note that context doesn't replace the usage of props or Redux; it serves a different purpose.

### Steps of using context:

1. **Create context:**

   **To Note, books.js file in context folder is the provider which sits at the top of the app**

```js
import { createContext } from "react";
const BookContext = createContext();
```

// Create a new context using the `createContext` function from React. `BookContext` will be the context object used as the provider and consumer.

1. **Specify data to be shared:**

   ```js
   <BookContext.Provider value={5}>
     {/* Rest of your app */}
   </BookContext.Provider>
   ```

   // Wrap your app or the relevant portion of it with the `Provider` component. The `value` prop is used to specify the unique data that will be shared with the rest of the app. In this example, the shared data is `5`.

2. **Consume data in a component:**

   ```js
   import { useContext } from "react";
   import BookContext from "./book"; // Assuming this is the correct import for your context

   function MyComponent() {
     const num = useContext(BookContext);
     // The `num` variable will store the value stored in the context, which is `-5` in this example
     return <div>{num}</div>;
   }
   ```

   // Use the `useContext` hook to access the shared data within a component. Pass the `BookContext` object as an argument to `useContext`. The component can now access the shared data, which is `-5` in this example.

3. **Create a provider component to update the shared value:**

   ```js
   import React, { useState } from "react";
   import { BookContext } from "./book"; // Assuming this is the correct import for your context

   function BookProvider({ children }) {
     const [valueToShare, setValueToShare] = useState(5);

     const incrementCount = () => {
       setValueToShare((prevValue) => prevValue + 1);
     };

     return (
       <BookContext.Provider value={valueToShare}>
         {/* The context provider will be shared with the rest of the app */}
         {children}
         {/* Render the children components */}
         <button onClick={incrementCount}>Increment Count</button>
       </BookContext.Provider>
     );
   }

   export { BookProvider };
   ```

   // Create a provider component, `BookProvider` in this case, to manage the state of the shared value. In this example, the shared value starts at `5`, and there's a button that increments the value when clicked. The updated value is then provided to the context, causing the provider component and its children to re-render with the new value.

4. **Wrap your app with the provider component in `index.js`:**

   ```js
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import { BookProvider } from "./context/books";

   ReactDOM.render(
     <BookProvider>
       {/* Just need to pass the provider here */}
       <App />
     </BookProvider>,
     document.getElementById("root")
   );
   ```

   // Wrap your entire app with the provider component, in this case, `BookProvider`. This allows the shared value and its state management to be available to all components within the app.

Please let me know if you need any further clarification or have any additional questions.

summary of the notes related to using context providers:

- The provider in context contains information and has internal state to update the value.
- The provider is created using the `<BooksContext.Provider>` component.
- The `value` prop of the provider allows you to pass data or functions to update the data.
- Typically, an object is used to encapsulate the data and update functions.
- In the example provided, the value is represented as an object containing `count` and `incrementCount`.
- Child components can access these properties and use them to change the value stored in the context.

Application state -> data used by multiple different components

multiple components will use particular states
meaning its primary data of our app, this being Application state

Component state -> data used by few components

select few care about specific state and key to particular component, this coming under component state

basically if several components use that data its application, if only particular component uses it, its component state

terms used to figure out how to design state better

its good practice to put application state in context, as rest of app use it,

however smaller components will use that data so no need to add to context provider

in my case as books state is application state, will add into Provider to pass to rest of the app, as its used by rest of components

will add functions inside provider,editBookById and deleteBookById to allow rest of app to modify and share

need to change in order each component reaches out to context provider instead of prop system

this is the refactor process

````js
<BookList
        onEdit={editBookById}
        books={books}
        onDelete={deleteBookById}
      />{" "}
      {/* onDelete prop to delete items and be passed to booklist*/}
      {/* shows component then adds prop, which communicates down to bookList*/}
      <BookCreate OnCreate={createBook} />

      ```
````

in order to use context in files,

add main code into provider file
then import that function to the file needed

then define const { which function/data to call } = useContext(BooksContext);/ then calls usecontext ,useContext is a hook which gives access and consume data from a context object within a functional component.

<BookShow key={book.id} book={book} />
in this case props and context can be used together, context still uses props
in this case better to pass down book prop instead of using context to find go into context and get book.

Hooks are functions that add, additional features to a component

UseState-> allows component to use state system to update or change value
useEffect -> allows component to run code at specific time
useContext -> allows component to access values stored in context

### Custom Hooks

function i can write to make reusuable bits of logic
Usually reuse basics hook

example below

```js
function useBooksContext() {
return useContext(BooksContext)
}

functionBookList() {
const {books} = useBookContext()
}
```

as seen here can reuse the context inside the second function

now added function to a seperate file to stop using two imports

will include more
