import {
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SORT_BY_PRICE,
  EDIT_PRODUCT,
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
    case SORT_BY_PRICE:
      let newProduct = state.sort(sortByPrice);
      //console.log(state, "after sorting");
      return newProduct;
    case EDIT_PRODUCT:
      let newArray = state.map((product) => {
        if (product.id == action.id) {
          return {
            ...product,
            name: action.name,
            price: action.price,
          };
        }
        return product;
      });
      return newArray;
    default:
      return state;
  }
}

function sortByPrice(a, b) {
  return a.price < b.price ? -1 : 1;
}
