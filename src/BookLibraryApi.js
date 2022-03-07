import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Navbar,
  Container,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

export default function BookLibraryApi() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  // const [searchInput, setSearchInput] = useState("");

  const submitButton = (e) => {
    e.preventDefault();
    if (!title || !author || !summary) {
      return;
    } else {
      const fromJSON = {
        title: title,
        author: author,
        genre: genre,
        summary: summary,
      };
      const url = "http://localhost:3000/books";
      axios
        .post(url, fromJSON)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
      setTitle("");
      setAuthor("");
      setGenre("");
      setSummary("");
    }
  };

  // const deleteButton = () => {
  //   const url = `http://localhost:3000/books${id}`;
  //   axios.delete(url);
  // };
  // const updateButton = () => {
  //   const url = `http://localhost:3000/books${id}`;
  //   axios.update(url, { title: "chanakya" });
  // };

  //   const booksFiltered = books.filter((item) =>
  //     item.Title.toLowerCase().includes(searchInput.toLowerCase())
  //   );

  return <div></div>;
}
