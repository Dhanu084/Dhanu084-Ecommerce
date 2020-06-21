import { ADD_TO_CART, DELETE_CART } from "../actions/actionTypes";

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      localStorage.setItem("cart", action.product);
      return [action.product, ...state];
    case DELETE_CART:
      let newCartArray = state.filter((item) => item.id != action.id);
      return newCartArray;
    default:
      return state;
  }
}
