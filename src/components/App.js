import React from "react";
import { connect } from "react-redux";
import { getproducts } from "../actions/product";
import { addProducttoDB } from "../actions/product";

import { Products, Navbar } from "./index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiVnbgzq1AHrsTo4IsJJyZyM6zImyzKFUNzZ8COyV1IDHxIvJ9&usqp=CAU",
      clicked: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getproducts());
  }
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
  addProduct = () => {
    const { clicked, name, price, image } = this.state;
    console.log(this.state);
    if (clicked) {
      this.props.dispatch(addProducttoDB(name, price, image));
      this.setState({
        clicked: false,
      });
    } else {
      this.setState({
        clicked: true,
        name: "",
        price: "",
      });
    }
  };
  render() {
    const { products } = this.props;
    const { clicked } = this.state;
    return (
      <div>
        <Navbar cart={this.props.cart} />
        {!clicked && <button onClick={this.addProduct}> Add product</button>}
        {clicked && (
          <div>
            <div>
              <input type="text" onChange={this.handleChangeName} />
            </div>
            <div>
              <input type="text" onChange={this.handleChangePrice} />
            </div>
            <div>
              <button onClick={this.addProduct}>add product</button>
            </div>
          </div>
        )}
        <div>
          {products.map((product) => (
            <Products
              product={product}
              key={product.id}
              dispatch={this.props.dispatch}
            />
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
