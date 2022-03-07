import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState("");

  const submitButton = () => {
    // e.preventDefault();we should not do because on submit it goes to JSON but to display on screen
    //it has to be refresh because useEffect will run when the page loads once(empty dependency array)
    //after removing also notworking so window mwthod has to be used as below

    if (!title || !author || !summary || !price) {
      return;
    } else {
      const fromJSON = {
        title: title,
        author: author,
        genre: genre,
        summary: summary,
        price: price,
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
    window.location.reload(); //if this is in else block not working.
  };
  return (
    <div className="secondChild">
      <div>
        <h2 style={{ textAlign: "center" }}>Add Book</h2>
        <Form>
          <FormGroup>
            <Label for="title">Title:</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author:</Label>
            <Input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Genre:</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={genre}
              onChange={(event1) => setGenre(event1.target.value)}
            >
              <option value="" disabled>
                --Select a Genre--
              </option>
              <option value="Mystry Thriller">Mystry Thriller</option>
              <option>Inspirational</option>
              <option>Autobiography</option>
              <option>Drama</option>
              <option>Medical</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePrice">Price:</Label>
            <Input
              id="examplePrice"
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="summary">Summary:</Label>
            <Input
              type="textarea"
              name="summary"
              id="summary"
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
            />
          </FormGroup>
          <Button color="success" onClick={submitButton}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
