import React, { Component } from "react";
import Book from "../src/Book";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2018 },
        { title: "Book 3", author: "Author 3", year: 2022 },
        // Add more books if you'd like
      ],
    };
  }
  render() {
    return (
      <div>
        <Book
          title={this.state.books[0].title}
          author={this.state.books[0].author}
          year={this.state.books[0].year}
        />
        <Book
          title={this.state.books[1].title}
          author={this.state.books[1].author}
          year={this.state.books[1].year}
        />
        <Book
          title={this.state.books[2].title}
          author={this.state.books[2].author}
          year={this.state.books[2].year}
        />
      </div>
    );
  }
}
