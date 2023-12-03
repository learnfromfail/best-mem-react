import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; //own asset

let cl = console.log;

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // return (
        //   <div>
        //     <h2>{book.title}</h2>
        //   </div>
        // );

        // return <Book title={book.title} author={book.author}></Book>;

        //return <Book3 book={book}></Book3>;

        return <Book4 {...book}></Book4>;
      })}
    </section>
  );
}

const book3 = {
  id: 1,
  title: "Book3",
  author: "Eric the Good",
};
const book4 = {
  id: 2,
  title: "Book4",
  author: "Eric the ambitious",
};
const book5 = {
  id: 3,
  title: "Book5",
  author: "Eric the kind",
};

const books = [book3, book4, book5];

const Book = (props) => {
  const { title, author } = props;
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      Title: <h2>{title}</h2>
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify(props)}
    </article>
  );
};

const Book1 = ({ title, author }) => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      Title: <h2>{title}</h2>
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify({ title, author })}
    </article>
  );
};
const Book2 = ({ title, author, children }) => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      Title: <h2>{title}</h2>
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify({ title, author })}
      <br></br>
      Children::{children}
    </article>
  );
};

const Book3 = ({ book: { title, author, children } }) => {
  //book3b const Book3 = (props) => {
  //book3b const { title, author, children } = props.book;
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      Title: <h2>{title}</h2>
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify({ title, author })}
      <br></br>
      Children::{children}
    </article>
  );
};

const Book4 = (props) => {
  const { title, author, children } = props;
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      Title: <h2>{title}</h2>
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify({ title, author })}
      <br></br>
      Children::{children}
    </article>
  );
};

const inlineHeadingStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
