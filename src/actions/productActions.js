import { FETCH_PRODUCTS, GET_PRODUCTS_ERROR, SORT_PRODUCT } from "../types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products"
    );
    const data = await res.json();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: error.response.data,
    });
  }
};

export const sortProductItem = (sortVal, items) => (dispatch) => {
  const sortedProduct = items.slice();
  if (sortVal === "default") {
    // sortedProduct.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProduct.sort((a, b) =>
      sortVal === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log("Action Value : ", sortedProduct);
  dispatch({
    type: SORT_PRODUCT,
    payload: {
      sort: sortVal,
      items: sortedProduct,
    },
  });
};
