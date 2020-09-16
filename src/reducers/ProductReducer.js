import { FETCH_PRODUCTS, GET_PRODUCTS_ERROR, SORT_PRODUCT } from "../types";

const initialState = {
  items: null,
  error: null,
  sort: "default",
  filteredItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};
