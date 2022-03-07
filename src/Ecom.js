import {
  Button,
  InputGroup,
  Input,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardGroup,
} from "reactstrap";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "./App.css";

export default function Ecom() {
  const [filterText, setFilterText] = useState("");
  const products = [
    {
      name: "Apple watch 3",
      imgUrl:
        "https://rukminim1.flixcart.com/image/312/312/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70",
      rating: 4.6,
      price: 19900,
    },
    {
      name: "Jacket",
      imgUrl:
        "https://rukminim1.flixcart.com/image/880/1056/kuu4x3k0/jacket/p/7/q/s-no-250347705-jack-jones-original-imag7vmzgxgvvw7z.jpeg?q=50",
      rating: 4.2,
      price: 1399,
    },
    {
      name: "Shoes For Men",
      imgUrl:
        "https://rukminim1.flixcart.com/image/714/857/krce64w0/shoe/u/t/y/6-hmi45-adidas-mysblu-ftwwht-original-imag55y268zys9we.jpeg?q=50",
      rating: 4.1,
      price: 1047,
    },
    {
      name: "Mobile phone",
      imgUrl:
        "https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lim.size_625x365.v1632764534.jpg",
      rating: 4.0,
      price: 15000,
    },
    {
      name: "boat headphones",
      imgUrl:
        "https://m.media-amazon.com/images/I/61gYxcIGjvL._AC_UY327_FMwebp_QL65_.jpg",
      rating: 4.5,
      price: 1899,
    },
    {
      name: "Chair",
      imgUrl:
        "https://rukminim1.flixcart.com/image/416/416/kqttg280/hammock-swing/i/e/3/white-colour-beautiful-swing-with-red-cushion-with-stand-jds-original-imag4qh4vadpw6jm.jpeg?q=70",
      rating: 4.3,
      price: 18999,
    },
  ];
  const filteredProducts = products.filter((el) =>
    el.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    // <div>
    //   <input
    //     type="text"
    //     value={filterText}
    //     onChange={(event) => setFilterText(event.target.value)}
    //   />
    //   <div className="products">
    //     {filteredProducts.map((item) => (
    //       <div className="Ecom" key={item.name}>
    //         <div>{item.name}</div>
    //         <img src={item.imgUrl} width="300" height="300" alt="products" />
    //         <div>Price = ₹ {item.price}</div>
    //         <div>Rating={item.rating}</div>
    //         <Button color="success">Buy now</Button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <div className="App">
        <InputGroup className="m-2">
          <Button>Filter products</Button>
          <Input
            type="text"
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
          />
        </InputGroup>
      </div>
      <div className="product-container">
        <CardGroup>
          {filteredProducts.map((item) => (
            <Card>
              <CardImg
                alt="Card image cap"
                src={item.imgUrl}
                top
                width="400"
                height="300"
              />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <div>₹ {item.price}</div>
                  <div>
                    <StarRatings
                      rating={item.rating}
                      starRatedColor="blue"
                      starDimension="25px"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </CardSubtitle>

                <Button color="success">Buy now</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </div>
    </>
  );
}
