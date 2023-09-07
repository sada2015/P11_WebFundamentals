import React from "react";

function BookDetail(props) {
  console.log("hellooo", props);
  return (
    <div>
      <h4>{props.book[0].title}</h4>
      <h4>{props.book[0].author}</h4>
      <h4>{props.book[0].year}</h4>
      <hr />
      <h4>{props.book[1].title}</h4>
      <h4>{props.book[1].author}</h4>
      <h4>{props.book[1].year}</h4>
      <hr />
      <h4>{props.book[2].title}</h4>
      <h4>{props.book[2].author}</h4>
      <h4>{props.book[2].year}</h4>
    </div>
  );
}

export default BookDetail;
