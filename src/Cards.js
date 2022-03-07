import React, { useState } from "react";
import { CardBody, Card, CardTitle, CardText, Button } from "reactstrap";
import { addToCart } from "./actions";

import { useDispatch } from "react-redux";
import axios from "axios";
export default function Cards({ id, title, author, genre, summary, price }) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const deleteButton = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios
      .delete(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updateButton = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios
      .put(url, {
        title: "chakri",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const addtoCart = () => {
    if (added) {
      return;
    } else {
      dispatch(addToCart(title, genre, summary, price, author));
      setAdded(true);
    }
  };
  return (
    <div>
      <Card className="cardItem">
        <CardBody>
          <CardTitle style={{ fontWeight: "bold", textAlign: "center" }}>
            {title}
          </CardTitle>
          <CardText>
            <div>
              Author: <span>{author}</span>
            </div>
            <div>
              Genre:
              <span style={{ paddingLeft: "7px" }}>{genre}</span>
            </div>
            <div style={{ fontStyle: "italic" }}>
              <span>{summary}</span>
            </div>
          </CardText>
          <div>
            <div>₹{price}</div>

            <Button color="success" onClick={updateButton}>
              Edit
            </Button>
            <Button color="danger" onClick={deleteButton}>
              Delete
            </Button>
            <Button color="warning" onClick={addtoCart}>
              {added ? "Added to Cart" : "Add to Cart"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
