import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
  return useContext(BooksContext);
}
export default useBooksContext;

// this file just uses bookcontet throws useContext then returns value
