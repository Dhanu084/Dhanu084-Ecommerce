import { ADD_TO_CART } from "./actionTypes";

export function addToCart(product) {
  return (dispatch) => {
    const url =
      "http://my-json-server.typicode.com/Dhanu084/Dhanu084-Ecommerce/cart";
    console.log(url);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        product,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.product);
        dispatch(addCart(data.product));
      });
  };
}

function addCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}
