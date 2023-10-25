import React, { useState } from "react";
import BookForm from "./BookForm";
import EmptyBookList from "./EmptyBookList";

function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      year: 2020,
      details: "Book Descriptio 1",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      year: 2018,
      details: "Book Descriptio 2",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      year: 2022,
      details: "Book Descriptio 3",
    },
  ]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [isDetails, SetIsDetails] = useState(false);

  const listItems = books.map((book) => (
    <>
      <li key={book.id} style={{ listStyleType: "none" }}>
        <p>
          <span>{book.title} By</span>&nbsp;
          <span>{book.author}</span>&nbsp;Pubished in &nbsp;
          <span>{book.year}</span> &nbsp;&nbsp;
          <button onClick={() => toggleDetails(book.id)}> Details</button>
          &nbsp;&nbsp;
          <span>{isDetails ? book.details : ""}</span>
          <button onClick={() => delBook(book.id)}>Delete</button>
        </p>
      </li>
    </>
  ));
  const addBook = (newBook) => {
    newBook.id = books.length + 1;
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };
  const delBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const toggleDetails = (id) => {
    SetIsDetails((state) => (state === true ? false : true));
  };
  return (
    <div>
      <h1>Pesto Book World</h1>
      <BookForm addBook={addBook} delBook={delBook} />
      <ul>{listItems == 0 ? <EmptyBookList /> : listItems}</ul>
    </div>
  );
}

export default BookList;
