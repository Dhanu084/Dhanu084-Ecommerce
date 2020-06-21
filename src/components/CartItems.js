import React from "react";
import products from "../reducers/products";

export default function CartItems(props) {
  const product = props.cart;

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
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/598/598234.svg"
            />

            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214926.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
