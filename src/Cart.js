import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, emptyCart } from "./actions";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  Row,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  console.log(items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteFromCart = (index) => {
    dispatch(removeFromCart(index));
  };
  const deleteCart = () => {
    dispatch(emptyCart());
    navigate("/");
  };
  // let totalPrice = items?.reduce((a, b) => a.price + b.price);
  return (
    <div>
      <Container>
        <Row>
          {items.map((item, index) => (
            <Card>
              <CardBody>
                <CardTitle>
                  <h2>{item.title}</h2>
                </CardTitle>
                <CardText>
                  <div>Author:{item.author}</div>
                  <div>Genre:{item.genre}</div>
                  <div>{item.summary}</div>
                  <div>₹{item.price}</div>

                  <Button color="success" onClick={() => deleteFromCart(index)}>
                    Delete from cart
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          ))}
          <div>{/* <h2>Total price is {totalPrice} </h2> */}</div>
          <div>
            <Button color="success" onClick={deleteCart}>
              Empty Cart
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
