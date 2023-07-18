Organized notes on setting up JSON Server for a project:

1. Install JSON Server: Run `npm install json-server` to install JSON Server as a dependency for the project.

2. Create a `db.json` file: Create a `db.json` file to store the data that JSON Server will serve. The file should have a structure like:

   ```js
   {
     "books": []
   }
   ```

   This example shows an empty array for storing books.

3. Add JSON Server command in `package.json`: In the `scripts` section of the `package.json` file, add the following command:

   ```js
   "server": "json-server -p 3001 --watch db.json"
   ```

   This command tells JSON Server to run on port 3001 (`-p 3001`) and watch the `db.json` file for changes (`--watch db.json`).

4. Run JSON Server: Execute the command `npm run server` to start the JSON Server. This will run the server on port 3001 and make the data in `db.json` available.

Additional Notes:

- JSON Server and React servers: With JSON Server running on port 3001, you can run the React development server on the default port 3000. Each server listens on its respective port.
-
- Making requests to JSON Server: You can make HTTP requests to JSON Server at `http://localhost:3001`, and specific endpoints can be accessed based on the defined routes.

- Example API requests: The notes provide examples of API requests, such as creating, updating, and deleting books using the appropriate HTTP methods (POST, PUT, DELETE) and endpoint URLs.
- Testing API requests: You can use a REST client extension or create an `api.http` file to test and send requests to the JSON Server API.
-
- Using axios for requests: To make requests to JSON Server from your React application, you can use a library like axios. Async/await syntax can be used to handle asynchronous requests.

more on async/await

The async keyword: When we define a function with the async keyword, it indicates that the function will contain asynchronous operations. It essentially tells JavaScript that this function may pause and resume later.

The await keyword: Inside an async function, await keyword is used before an asynchronous operation (such as an API request) to pause the execution of the function until the operation completes and a result is returned. The await keyword waits for the promise to resolve and then returns the resolved value.

Handling asynchronous errors: We can use a try/catch block to handle errors that may occur during asynchronous operations. By wrapping the code in a try block, we can catch any errors that are thrown and handle them gracefully in the catch block.

These organized notes provide a step-by-step guide on setting up and using JSON Server for a project, including creating the `db.json` file, running the server, making requests, and using axios for request handling in a React application.

in data object contains new id with title when editing booj

when ever making request using async and await with axios template below

````js
const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    ```
    here showing to delete books using async/await with axios to send rdelete request

````
