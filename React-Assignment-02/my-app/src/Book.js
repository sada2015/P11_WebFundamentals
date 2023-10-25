import React, { PureComponent } from "react";

export default class Book extends PureComponent {
  constructor(props) {
    super(props);
    console.log("djdjdjd", props);
  }
  render() {
    return (
      <div>
        <h2>Title:{this.props.title}</h2>
        <h2>Author:{this.props.author}</h2>
        <h2>Year:{this.props.year}</h2>
        <hr />
      </div>
    );
  }
}
