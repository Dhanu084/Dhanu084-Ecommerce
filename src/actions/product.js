import {
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "./actionTypes";

export function getproductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}

export function getproducts() {
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

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function addProducttoDB(name, price, image) {
  return (dispatch) => {
    const url =
      "http://my-json-server.typicode.com/Dhanu084/Dhanu084-Ecommerce/products";
    console.log(url);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: price,
        image: image,
        id: 6,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(addProduct(data));
      });
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id,
  };
}
