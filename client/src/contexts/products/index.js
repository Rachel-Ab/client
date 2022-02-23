import { createContext, useReducer } from 'react';

import { GET_PRODUCTS, GET_ONE_PRODUCT } from './types';
// Définition du state, du context etc etc
const initialState = {
  products: [],
  product: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case GET_ONE_PRODUCT: {
      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
