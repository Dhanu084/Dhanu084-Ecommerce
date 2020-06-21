import React, { Component } from "react";
import { deleteProduct, editProduct } from "../actions/product";
import { addToCart } from "../actions/cart";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      price: this.props.product.name,
      edit: false,
    };
  }
  onDeleteProduct = (id) => {
    this.props.dispatch(deleteProduct(id));
  };

  addToCart = (product) => {
    this.props.dispatch(addToCart(product));
  };
  editProduct = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  saveProduct = (id) => {
    const { name, price } = this.state;
    this.props.dispatch(editProduct(id, name, price));
    this.setState({
      edit: false,
    });
  };
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
              onClick={this.editProduct}
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
        {this.state.edit && (
          <div>
            <input
              placeholder={product.name}
              onChange={this.handleChangeName}
            />
            <input
              placeholder={product.price}
              onChange={this.handleChangePrice}
            />
            <button onClick={() => this.saveProduct(product.id)}>Save</button>
          </div>
        )}
      </div>
    );
  }
}
