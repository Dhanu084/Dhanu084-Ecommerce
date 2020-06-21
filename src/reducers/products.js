import {
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/actionTypes";

export default function products(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.products;
    case ADD_PRODUCT:
      return [action.product, ...state];
    case DELETE_PRODUCT:
      let newproductArray = state.filter((product) => product.id != action.id);
      return newproductArray;
    default:
      return state;
  }
}
