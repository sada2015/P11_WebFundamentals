import React from "react";
import Book from "./BOOK";
const BookList = () => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    // Add more books if you'd like
  ];
  return (
    <div>
      <Book
        title={books[0].title}
        author={books[0].title}
        year={books[0].year}
      />
      <Book
        title={books[1].title}
        author={books[1].title}
        year={books[1].year}
      />
      <Book
        title={books[2].title}
        author={books[2].title}
        year={books[2].year}
      />
    </div>
  );
};

export default BookList;
