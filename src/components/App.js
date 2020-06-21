import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getproducts } from "../actions/product";

import { Products, Navbar, Cart, Home } from "./index";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getproducts());
  }

  render() {
    const { cart } = this.props;

    return (
      <Router>
        <div>
          <Navbar cart={cart} />

          <Route
            exact
            path="/"
            render={(props) => {
              {
                /*default props that contains info such as location,history. Passing this along with our posts */
              }
              return <Home {...props} dispatch={this.props.dispatch} />;
            }}
          />

          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(App);
