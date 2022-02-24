import { createContext, useReducer } from 'react';

import { GET_CATEGORIES, FILTER_CAT } from './types';
// Définition du state, du context etc etc
const initialState = {
  categories: [],
  category: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case FILTER_CAT: {
      const id = action.payload;

      return {
        ...state,
        category: state.categories.find(c => c.id === id),
      };
    }

    default:
      return state;
  }
};

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
