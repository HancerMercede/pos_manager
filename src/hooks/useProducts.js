import { useEffect, useReducer } from "react";
import { productReducer } from "../Reducers/ProductReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const useProducts = () => {
  const [products, dispatch] = useReducer(productReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleNewProduct = (product) => {
    const action = {
      type: "[PRODUCT] Add product",
      payload: product,
    };
    dispatch(action);
  };
  const handleDeleteProduct = (id) => {
    dispatch({ action: "[PRODUCT] delete product", payload: id });
  };

  return {
    products,
    handleNewProduct,
    handleDeleteProduct,
  };
};
