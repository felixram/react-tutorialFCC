import React from "react";
import ReactDOM from "react-dom";

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>Jhon Doe</h2>;
const Message = () => <p>this is my message</p>;

ReactDOM.render(<Greeting />, document.getElementById("root"));

// const Greeting = () => {
//   return react.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };
