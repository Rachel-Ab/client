import { createContext, useReducer } from 'react';

import { GET_PRODUCTS } from './types';
// Définition du state, du context etc etc
const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
