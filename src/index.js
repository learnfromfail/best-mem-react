import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; //own asset

import booksDefault from "./books";
import { books2 } from "./books";
import { books3 } from "./books";

import Book from "./Book";

let cl = console.log;

function BookList() {
  const getBook = (id) => {
    const book = booksDefault.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        <EventExamples></EventExamples>
        {booksDefault.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              id={book.id}
              number={index}
            ></Book>
          );
        })}
      </section>
    </>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e);
    // console.log(`e.target : `, e.target);
    // console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault(); //handle form submission by ourselves
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit" onSubmit={handleFormSubmission}>
          submit
        </button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
      <button onClick={() => cl("handle button click")}>click me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
