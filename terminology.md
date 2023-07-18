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

### Context

context system is used share through components even if they dont have a direct link

can share any data such as numbers,string or objects having more info inside it

can use context to use specfic information such as list of books getting back array of books

steps of using context

1. create context
2. specify data thats being shared
3. cosume data in a component
   context doesnt replace props or redux

to create context, this being step 1

```js
import { createContext } from "react";
const BookContext = createContext();
```

the BookContext, can be any name is the provider and consumer

two properites used in bookcontext variable
provider -> component used to define which data i want to share

consumer -> gets access to data not often used

step 2
<BookContext.Provider value={5}>value prop is unqiye, will be shared with rest of app,data that is shared is 5 in this case
<MyComponent/> component can access value shared in context
</BookContext.Provider>

usually put provider at top of file,
then value prop will become access to rest of app

step 3

```js
import { useContext } from "react";
// function to access value in context
import BookContext from "./book"; // context objject

function MyComponent() {
  const num = useContrxt(BookContext);
  // num is value stored in context -5
  return <div>{num}</div>;
}
```

in index.js added books context.provider into the root render to render to the app

to note can add more than one element

Provider will be used twice in order to add in state to update value

will create new component to store state
