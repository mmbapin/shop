import { ADD_TO_CART, REMOVE_FROM_CART, DETAILS_PROD } from "../types";

const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    itemDetails: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case DETAILS_PROD:
      return { itemDetails: action.payload.products };
    default:
      return state;
  }
};

export default cartReducer;
