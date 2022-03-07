const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [...state, action.payload];
    case "REMOVEFROMCART":
      let newcart = [...state];
      newcart.splice(action.payload, 1);
      return newcart;
    case "EMPTYCART":
      return [];
    default:
      return state;
  }
};
export default cartReducer;
