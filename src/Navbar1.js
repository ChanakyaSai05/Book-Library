import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Navbar } from "reactstrap";
import { search } from "./actions";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar1() {
  const searchResult = useSelector((state) => state.search);
  const cartLength = useSelector((state) => state.cart);
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  return (
    <Navbar
      className="bg-warning"
      style={{
        color: "white",
        padding: "14px",
        fontWeight: "bold",
        fontSize: "19px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        LIBRARY PORTAL
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        Cart
        <span style={{ padding: "1px", margin: "2px" }}>
          {cartLength.length === 0 ? "" : cartLength.length}
        </span>
      </Link>
      <Button
        color="warning"
        style={{
          color: "white",

          fontWeight: "bold",
          fontSize: "19px",
        }}
        onClick={() => logout()}
      >
        Logout
      </Button>
      <div style={{ display: "flex" }}>
        <Input
          type="text"
          value={searchResult}
          placeholder="Search here"
          onChange={(e) => dispatch(search(e.target.value))}
        ></Input>
      </div>
    </Navbar>
  );
}
