import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_DEL,
  INCREASE_PAGE,
} from "./product.actions.types.js";
import { getDataApi } from "./product.api.js";

export const GetProductRequest = () => ({ type: PRODUCT_REQUEST });
export const GetProductError = () => ({ type: PRODUCT_ERROR});
export const GetProductSuccess = () => (dispatch) => {
  dispatch(GetProductRequest);
  getDataApi().then((res) => {
    dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
  }).catch((er)=>{
    dispatch(GetProductError)
  });
};
