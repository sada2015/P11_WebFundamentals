import React from "react";
import BOOK from "./BOOK";
const BOOKLIST = (props) => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    // Add more books if you'd like
  ];
  return (
    <div>
      <ul>
        <li>
          <BOOK
            title={books[0].title}
            author={books[0].author}
            year={books[0].year}
          />
        </li>
        <li>
          <BOOK
            title={books[1].title}
            author={books[1].author}
            year={books[1].year}
          />
        </li>
        <li>
          <BOOK
            title={books[2].title}
            author={books[2].author}
            year={books[2].year}
          />
        </li>
      </ul>
    </div>
  );
};

export default BOOKLIST;
