export const productReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[PRODUCT] Add Product":
      return [...initialState, action.payload];

    case "[PRODUCT] Remove Product":
      return initialState.filter((product) => product.id == action.payload);
    default:
      return initialState;
  }
};
