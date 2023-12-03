import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; //own asset

let cl = console.log;

// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// someFunc("job", "developer");

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book2 title="aaa" author="Eric the Great" children="333333"/>
      1234aaaa
      <Book title={ThirdBook.title} author={ThirdBook.author} />
      <Book />
    </section>
  );
}

const ThirdBook = {
  title: "Book3",
  author: "Eric the Man",
};
const book4 = {
  title: "Book4",
  author: "Eric the Man",
};
const book5 = {
  title: "Book5",
  author: "Eric the Man",
};

const Books = [

]

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

const inlineHeadingStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
