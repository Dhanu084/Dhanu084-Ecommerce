import React, { Component } from "react";
import { connect } from "react-redux";
import { CartItems } from "./index";

export class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(this.props);
    return (
      <div>
        {cart.map((item) => (
          <CartItems cart={item} dispatch={this.props.dispatch} key={item.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
