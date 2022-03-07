export const search = (e) => {
  return {
    type: "EVENT",
    payload: e,
  };
};
export const addToCart = (title, genre, summary, price, author) => {
  return {
    type: "ADDTOCART",
    payload: {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
      price: price,
    },
  };
};

export const removeFromCart = (index) => {
  return {
    type: "REMOVEFROMCART",
    payload: index,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTYCART",
  };
};

export const counterInc = () => {
  return {
    type: "INCREMENT",
  };
};
export const counterDec = () => {
  return {
    type: "DECREMENT",
  };
};
