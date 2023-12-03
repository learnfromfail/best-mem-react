import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //own asset
let cl = console.log;

const book1 = {
  id: 1,
  title: "Eric the strong man",
  author: "Eric",
};
const book2 = {
  id: 2,
  title: "Eric the wise man",
  author: "Eric",
};
const book3 = {
  id: 3,
  title: "Eric the kind-hearted man",
  author: "Eric",
};

const books = [book1, book2, book3];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      <EventExamples></EventExamples>
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} getBook={getBook} id={book.id}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, author, children, getBook, id } = props;
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
    </article>
  );
};

const inlineHeadingStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

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
