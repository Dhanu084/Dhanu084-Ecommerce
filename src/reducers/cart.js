import { ADD_TO_CART } from "../actions/actionTypes";

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      localStorage.setItem("cart", [action.product, ...state]);
      return [action.product, ...state];
    default:
      return state;
  }
}
