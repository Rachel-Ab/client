import { createContext, useReducer } from 'react';

import {
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  FILTERED_PRODUCTS,
  FILTERED_PRODUCTS_BY_PRICE,
} from './types';
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

    case FILTERED_PRODUCTS_BY_PRICE: {
      const range = action.payload;

      let filtered = state.products.filter(p =>
        p.priceHT / 100 >= range.min ? p : null
      );

      if (range.max) {
        filtered = state.products.filter(p =>
          p.priceHT / 100 >= range.min && p.priceHT / 100 < range.max ? p : null
        );
      }

      return {
        ...state,
        filtered: filtered,
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
