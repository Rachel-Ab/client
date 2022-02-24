import { createContext, useReducer } from 'react';
import { GET_CART_ITEMS, ADD_TO_CART, REMOVE_ITEM, UPDATE_QTY } from './types';

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
      let prods = action.payload;
      let stateProds = JSON.parse(localStorage.getItem('cart')) || [];

      // associer les deux tableaux
      for (let i = 0; i < prods.length; i++) {
        if (prods[i].id === stateProds[i].id) {
          prods[i].qty = stateProds[i].qty;
        }
      }

      return {
        ...state,
        products: prods,
      };
    }

    case REMOVE_ITEM: {
      // Enlever le produit du panier
      const id = action.payload;
      const newProducts = state.products.filter(p => p.id !== id);

      localStorage.setItem('cart', JSON.stringify(newProducts));

      return {
        ...state,
        products: newProducts,
      };
    }

    case UPDATE_QTY: {
      const { id, qty } = action.payload;

      const prods = state.products.map(p => {
        if (p.id === id) {
          p.qty = qty;
        }

        return p;
      });

      localStorage.setItem('cart', JSON.stringify(prods));

      return {
        ...state,
        products: prods,
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
