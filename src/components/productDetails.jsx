import React from "react";

class ProductDetails extends React.Component {
  handleSave = () => {};
  render() {
    return (
      <div>
        <h1>Product Details-</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
export default ProductDetails;
