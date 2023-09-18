import React, { useState } from "react";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new book object with the provided data
    const newBook = { title, author, year: parseInt(year) };

    // Call the addBook function from the parent component to add the new book
    addBook(newBook);

    // Clear the input fields after adding the book
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        &nbsp;
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        &nbsp;
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        &nbsp;
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}

export default BookForm;
