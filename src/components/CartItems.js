import React from "react";
import { deleteItemFromCart } from "../actions/cart";

export default class CartItems extends React.Component {
  deleleProduct = (id) => {
    this.props.dispatch(deleteItemFromCart(id));
  };
  render() {
    const product = this.props.cart;
    return (
      <div>
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
                alt="delete"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/1214/1214926.svg"
                onClick={() => this.deleleProduct(product.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
