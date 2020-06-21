import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block"></div>
        <div className="right-block">
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      </div>
    );
  }
}
