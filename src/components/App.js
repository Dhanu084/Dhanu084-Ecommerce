import React from "react";
import { connect } from "react-redux";
import getproducts from "../actions/product";
import { Products } from "./index";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getproducts());
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <div>
          {products.map((product) => (
            <Products product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(App);
