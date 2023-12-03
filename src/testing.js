import React from "react";
import ReactDOM from "react-dom/client";

function Greeting00() {
  return <h2>Function = Component</h2>;
}

function Greeting01() {
  return (
    <div>
      <h1>Function = Component</h1>
      <h2>Function = Component</h2>
    </div>
  );
}

function Greeting1() {
  return React.createElement("h2", {}, "hello world");
}

function Greeting2() {
  return React.createElement(
    "h2",
    {},
    React.createElement("h2", {}, "123 321")
  );
}

function Greeting3() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Function = 111</h1>;
const Message = () => {
  return <h2>Function = 222</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting3></Greeting3>);
