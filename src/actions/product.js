import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

export function getproductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}

export default function getproducts() {
  return (dispatch) => {
    const url =
      "http://my-json-server.typicode.com/Dhanu084/Dhanu084-Ecommerce/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(getproductsSuccess(data));
      });
  };
}
