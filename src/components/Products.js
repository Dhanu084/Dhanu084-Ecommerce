import React, { Component } from "react";
import { deleteProduct } from "../actions/product";
import { addToCart } from "../actions/cart";

export default class Products extends Component {
  onDeleteProduct = (id) => {
    this.props.dispatch(deleteProduct(id));
  };

  addToCart(product) {
    this.props.dispatch(addToCart(product));
  }
  render() {
    console.log("products page", this.props);
    const { product } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img src={product.image} />
        </div>
        <div className="right-block">
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/598/598234.svg"
            />

            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214926.svg"
              onClick={() => this.onDeleteProduct(product.id)}
            />
            <img
              alt="add to cart"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/2331/2331667.svg"
              onClick={() => this.addToCart(product)}
            />
          </div>
        </div>
      </div>
    );
  }
}
