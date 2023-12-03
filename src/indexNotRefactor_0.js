import React from "react";
import ReactDOM from "react-dom/client";

//own asset
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81E8epGGydL._AC_UL480_FMwebp_QL65_.jpg"
    alt="Neptune Island: A Fast-Paced Action-Adventure Thriller (A Lincoln Monk Adventure Book 1)"
  />
);
const Title = () => <h2>Book Tit1e</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
