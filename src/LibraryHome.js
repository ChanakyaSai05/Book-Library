import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";
import InputForm from "./InputForm";
export default function LibraryHome() {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    await axios
      .get(url)
      .then((result) => setBooks(result))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <List state={books} />
      <InputForm />
    </div>
  );
}
