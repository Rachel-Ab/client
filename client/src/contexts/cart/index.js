import { createContext, useReducer } from 'react';

import { GET_CART_ITEMS, ADD_TO_CART } from './types';
import login from '../../components/auth/Login';
// Définition du state, du context etc etc
const initialState = {
  products: JSON.parse(localStorage.getItem('cart')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const prods = state.products;

      const id = action.payload;

      let prod = { id, qty: 1 };
      let newProds = [];

      if (prods.length) {
        newProds = prods.map(product => {
          if (prod.id === product.id) {
            // Limiter la quantite de produit qu'on veut ajouter
            return { id: product.id, qty: product.qty + 1 };
          } else {
            return prod;
          }
        });
      } else {
        newProds.push(prod);
      }

      localStorage.setItem('cart', JSON.stringify(newProds));

      return {
        ...state,
        products: newProds,
      };
    }

    case GET_CART_ITEMS: {
      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
