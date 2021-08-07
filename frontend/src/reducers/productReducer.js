import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants.js";

const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILURE:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
export default productListReducer;