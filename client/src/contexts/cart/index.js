import { createContext, useReducer } from 'react';
import { GET_CART_ITEMS, ADD_TO_CART } from './types';

// Définition du state, du context etc etc
const initialState = {
  products: JSON.parse(localStorage.getItem('cart')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let prods = state.products;
      let newProds = prods;
      let newProd = {};

      const id = action.payload;

      let prod = { id, qty: 1 };

      if (prods.length) {
        newProd = prods.find(product => {
          return product.id === prod.id;
        });
        if (newProd) {
          newProd = { id: newProd.id, qty: newProd.qty + 1 };

          newProds = prods.map(p => (p.id === prod.id ? newProd : p));
        } else {
          newProds.push(prod);
        }
      } else {
        newProds.push(prod);
      }

      localStorage.setItem('cart', JSON.stringify(newProds));

      return {
        ...state,
        products: newProds,
      };
    }

    // ?
    case GET_CART_ITEMS: {
      console.log(action.payload);

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
