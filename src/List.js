import React from "react";
import Cards from "./Cards";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function List({ state }) {
  const search = useSelector((state) => state.search);
  console.log(search);
  const filteredText = state.data?.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="belowContainer">
      <div className="firstChild">
        <Container className="cardContainer">
          {filteredText?.map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              title={item.title}
              author={item.author}
              genre={item.genre}
              summary={item.summary}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}
