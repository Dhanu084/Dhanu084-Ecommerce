import React from "react";
import { connect } from "react-redux";
import getproducts from "../actions/product";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getproducts());
  }

  render() {
    console.log(this.props);
    return <div>Ecommerce</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(App);
