import { GET_PRODUCTS_SUCCESS } from "../actions/actionTypes";

const initialProductState = [{}];

export default function products(state = initialProductState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
