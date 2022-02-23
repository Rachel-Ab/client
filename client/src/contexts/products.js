import { createContext, useReducer } from 'react';
import axios from 'axios';
import { GET_PRODUCTS } from './types';
// Définition du state, du context etc etc
const initialState = {
  products: [],
};

const reducer = async (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      try {
        const response = await axios.get('/api/products');
        return {
          ...state,
          products: response.data,
        };
      } catch (e) {
        console.log(e);
      }
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
