import React from "react";
import ReactDOM from "react-dom/client";

let cl = console.log;

const Book = (props) => {
  const { title, author, children, getBook, id, number } = props;
  cl("getBook", getBook, id);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
        alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
      />
      <br />
      Title: <h2>{title}</h2>::ID::{id}
      <br />
      Author<h4 style={inlineHeadingStyles}>{author}</h4>
      {JSON.stringify({ title, author })}
      <br />
      Children::{children}
      <br />
      <button onClick={getSingleBook}>display title</button>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  );
};

const inlineHeadingStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

export default Book;
