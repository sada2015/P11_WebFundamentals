import React from "react";

const Book = (props) => {
  //   console.log("PROPS", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Author:{props.author}</p>
      <p>Year:{props.year}</p>
    </div>
  );
};

export default Book;
