import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books"; // no need to import all context object, jus concept provider, shows built in provider

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    {" "}
    {/* just need to pass provider here */}
    <App />
  </Provider>
); // render more than one element
