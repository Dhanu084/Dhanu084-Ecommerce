import { GET_PRODUCTS_SUCCESS } from "../actions/actionTypes";

export default function products(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
