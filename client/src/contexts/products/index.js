import { createContext, useReducer } from 'react';

import { GET_PRODUCTS, GET_ONE_PRODUCT, FILTERED_PRODUCTS } from './types';
// Définition du state, du context etc etc
const initialState = {
  products: [],
  product: {},
  filtered: [],
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

    case FILTERED_PRODUCTS: {
      console.log(action.payload);
      return {
        ...state,
        products: state.products,
        filtered:
          action.payload === 'all'
            ? state.products
            : state.products.filter(p => p.category_id === action.payload),
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
