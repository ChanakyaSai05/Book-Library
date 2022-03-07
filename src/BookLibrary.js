import React, { useState } from "react";
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

export default function BookLibrary() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [books, setBooks] = useState([
    {
      Title: "Origins",
      Author: "Dan Brown",
      Genre: "Medical",
      para: "The fifth installment in the Robert Langdon series",
    },
    {
      Title: "Crisis",
      Author: "Robin Cook",
      Genre: "Mystery thriller",
      para: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
    },
    {
      Title: "The Alchemist",
      Author: "Paulo Coelho",
      Genre: "Drama",
      para: "Magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure",
    },
    {
      Title: "Harry Potter",
      Author: "J. K. Rowling",
      Genre: "Fantasy",
      para: "a young wizard who discovers his magical heritage on his eleventh birthday",
    },
  ]);
  const [input, setInput] = useState("");

  const submitButton = () => {
    if (!title || !author || !summary) {
      return;
    } else {
      setBooks([
        ...books,
        { Title: title, Author: author, Genre: genre, para: summary },
      ]);
      localStorage.setItem("books", JSON.stringify(books));
      setTitle("");
      setAuthor("");
      setGenre("");
      setSummary("");
    }
  };
  const deleteCard = (index) => {
    const Books = [...books];
    Books.splice(index, 1);
    setBooks(Books);
  };
  const booksFiltered = books.filter((item) =>
    item.Title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <Navbar
        className="bg-warning"
        style={{
          color: "white",
          padding: "14px",
          fontWeight: "bold",
          fontSize: "19px",
        }}
      >
        LIBRARY PORTAL
        <span>
          <Input
            type="text"
            value={input}
            placeholder="Search here"
            onChange={(event) => setInput(event.target.value)}
          />
        </span>
      </Navbar>
      <div className="belowContainer">
        <div className="firstChild">
          <Container className="cardContainer">
            {booksFiltered.map((item, index) => (
              <Card className="cardItem">
                <CardBody>
                  <CardTitle
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {item.Title}
                  </CardTitle>
                  <CardText>
                    <div>
                      Author: <span>{item.Author}</span>
                    </div>
                    <div>
                      Genre:{" "}
                      <span style={{ paddingLeft: "7px" }}>{item.Genre}</span>
                    </div>
                    <div style={{ fontStyle: "italic" }}>
                      <span>{item.para}</span>
                    </div>
                  </CardText>
                  <div>
                    <Button color="primary">Edit</Button>
                    <Button color="danger" onClick={() => deleteCard(index)}>
                      Delete
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Container>
        </div>
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
      </div>
    </div>
  );
}
